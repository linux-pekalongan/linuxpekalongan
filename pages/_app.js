import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/prism-theme.css'
import Head from 'next/head'
import siteData from '../site-data'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="title" content="Pekalongan Linux Community" />
    <meta name="author" content="Pekalongan1337" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#111827" />
    <meta http-equiv="Cache-control" content="public" />
    <meta name="generator" content="Next.js" />
    <meta name="description" content="Pekalongan linux community" />
    <meta property="og:description" content="Pekalongan linux community" />
    <meta name="application-name" content="Pekalongan1337" />
                <title>{ siteData.name }</title>
</Head>
    <div className='min-h-screen p-0 m-0 text-sm antialiased text-gray-700 bg-gray-100 md:text-base font-ubuntu'>
    <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
