import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import siteData from '../site-data'

function IndexPage(){
  return(
    <>
      <Head>
      </Head>
       <div className='bg'>
            <Navbar />
         <Header />
             <Footer />
</div>
         
    </>
  )
}

export default IndexPage
