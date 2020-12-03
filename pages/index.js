import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import siteData from '../site-data'

function IndexPage(){
  return(
    <>
      <Head>
        <title>{ siteData.name }</title>
        </Head>
            <Navbar />
             <Footer />

         
    </>
  )
}

export default IndexPage
