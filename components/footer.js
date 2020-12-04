import siteData from '../site-data'

function Footer(){
  return(
    <>
      <div className='w-full p-8 text-center text-white bg-gray-900'>
        © 2020 <b>Pekalongan<span  className='text-green-400'>1337</span></b> <br/>Powered by <b className='text-green-400'>Next.js</b> and <b className='text-green-400'>Vercel</b>
          </div>
    </>
  )
}

export default Footer
