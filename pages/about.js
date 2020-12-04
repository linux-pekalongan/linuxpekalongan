import Navbar from '../components/navbar'
import Footer from '../components/footer'

function About(){
  return(
    <>
      <Navbar />
     <div className='flex flex-row h-screen pt-12 mx-0 text-white bg'>
            <div className='flex flex-col p-12 md:p-28'>
              <div className='pb-4 text-3xl font-bold text-green-400 md:text-4xl'>COMMING SOON</div>
                         </div>
          </div>
      <Footer />
    </>
  )
}

export default About
