import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import tempe from 'tempe'
import siteData from '../site-data'
import Head from 'next/head'


function Blog(props){
    return(
    <>
       <Head>
        <title>Artikel | Linux Pekalongan</title>
        </Head>
      <Navbar />
      <div className='bg'>
        <div className='container flex flex-row p-4 mx-auto text-white md:px-40 md:p-28'>
          <div className="mt-16 md:mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                     {props.blogs.map((blog, idx)=>{
            const cover = '/assets/artikel/' + blog.slug + '/cover.png'
            return (
              <div  key={blog.id} className='overflow-hidden bg-gray-900 rounded-lg shadow-md hover:shadow-xl'>
                <img src={cover}/>
                <div className='p-4'>
                  <div>
                    <div className='text-xl font-extrabold hover:text-green-400'>
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </div>
                    <div className='flex flex-row pb-2 mb-2' style={{ borderBottom : 'solid 1px #222937' }}>
                      <img src={siteData.icon.calendar} width='15px' />
                      <span className='pl-2 text-xs text-gray-400'>{tempe(blog.date).format("d, DD MMMM YYYY")}  </span>
                    </div>
                    <span className='p-1 mr-1 text-xs uppercase bg-gray-800 text-bold'>{blog.tags}</span>
                  </div>
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
