import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import tempe from 'tempe'
import siteData from '../../site-data'
import Head from 'next/head'
import Disqus from '../../components/disqus'
import {DiscussionEmbed} from "disqus-react"


function postPage(props){
  const cover = '/assets/artikel/' + props.blog.slug + '/cover.png'

  const disqusShortname = "pekalongan1337"
  const disqusConfig = {
    url: "https://pekalongan1337.vercel.app/"+props.blog.slug,
    identifier: props.blog.id,
    title: props.blog.title
  }

  return (
    <>
      <Head>
        <title>Artikel | {props.blog.title}</title>
      </Head>
      <div className='min-h-screen bg'>
        <Navbar />
        <div className='text-sm text-white md:text-base'>
          <div className='flex flex-col pb-12'>
            <div className='md:px-56'>
              <img src={cover} className='mt-16'/>
              <div className='px-4 pt-12 text-3xl font-extrabold title'>{props.blog.title}</div>
              <div className='flex flex-row px-4 pb-12'>
                <img src={siteData.icon.calendar} width='15px' />
                <span className='pl-2 text-xs text-gray-400'>{tempe(props.blog.date).format("d, DD MMMM YYYY")}</span>
              </div>
              <div className='px-4'><span dangerouslySetInnerHTML={{ __html: props.blog.content }} /></div>
              <div>
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export async function getStaticProps(context){
  const fs = require('fs');
  const html = require('remark-html');
  const highlight = require('remark-prism')
  const unified = require('unified');
  const markdown = require('remark-parse');
  const matter = require('gray-matter');

  const slug = context.params.slug;
  const path = `${process.cwd()}/contents/${slug}.md`;

  const rawContent = fs.readFileSync(path, {
    encoding : "utf-8"
  });

  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight)
    .use(html)
    .process(content);

  return {
    props: {
      blog : {
        ...data,
        content : result.toString(),
      }
    },
  };
}

export async function getStaticPaths(context){
  const fs = require('fs');

  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => fn.replace('.md', ''));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params : {
          slug : fileName,
        },
      };
    }),
    fallback : false,
  };
}

export default postPage


