import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import tempe from 'tempe'

function Blog(props){
  return(
    <>
      <Navbar />
      <div className='bg'>
        <div className='container flex flex-row p-4 mx-auto text-white md:px-40 md:p-28'>
          <div className="mt-16 md:mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {props.blogs.map((blog, idx,date)=>{
            const cover = '/assets/artikel/' + blog.slug + '/cover.png'
            return (
              <div className='overflow-hidden rounded-lg shadow-md bg-secondary hover:shadow-xl'>
                <img src={cover}/>
                <div className='p-4'>
                  <div key={blog.id}>
                    <div className='text-2xl font-extrabold text-green-400'>
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </div>
                    {tempe(blog.date).format("d, DD MMMM YYYY")}                  </div>
                </div>
              </div>
            );
          })}
        </div>
          </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const fs  = require('fs');
  const matter = require('gray-matter');
  const { v4: uuid } = require('uuid');

  const files = fs.readdirSync(`${process.cwd()}/contents/`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent =fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);
      return {...data, id:uuid()};
    });
  return {
    props : { blogs },
  };
}


export default Blog
