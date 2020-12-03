import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'

function Blog(props){
  return(
    <>
      <Navbar />
      <div>
        {props.blogs.map((blog, idx)=>{
          return (
            <div key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
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
