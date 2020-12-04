import Link from 'next/link'
import siteData from '../site-data'
import styles from '../styles/navbar.module.css'

function mobileMenu(){
  let x = document.getElementById("myMenu")
  if(x.style.display === 'block') {
    x.style.display = 'none'
  } else {
    x.style.display = 'block'
  }
}

function Navbar(){
  return(
    <>
      <div className='fixed z-10 w-full p-4 mt-0 text-white bg-gray-900 md:p-5 menu' >
        <div className='container flex flex-row justify-between mx-auto md:px-32'>
          {/* logo untuk mobile */}
          <a className='flex flex-row md:hidden'>
            <img src={ siteData.icon.kalong } width='40px'/>
          </a>

          {/* Menu untuk desktop */}
          <div className='hidden font-bold md:flex md:flex-row'>
            <img src={ siteData.icon.kalong } width='60px'/>
            <Link href='/'>
              <a className='pl-1 text-xl'>Pekalongan<span className='text-green-400'>1337</span></a>
            </Link>
          </div>
          {/* mobile center */}
          <Link href='/'><a className='flex flex-row text-base font-extrabold md:hidden' style={{ fontSize: '20px' }}> <b className='text-lg font-bold'>Pekalongan<span className='text-green-400'>1337</span></b></a></Link>
          {/* toggle */}
          <a onClick={mobileMenu} className='flex flex-row md:hidden'>
            <img src={ siteData.icon.menu }/>
          </a>
          {/* Menu untuk desktop */}
          <div className='hidden font-bold md:flex md:flex-row'>
            <Link href='/'><a className='px-4 hover:text-green-400'>Home</a></Link>
            <Link  href='/blog'><a  className='px-4 hover:text-green-400'>Artikel</a></Link>
            <Link  href='/about'><a className='px-4 hover:text-green-400'>About</a></Link>
          </div>

        </div>
        {/* Dropdown menu mobile */}
        <div className='pt-4 text-base' id='myMenu'>
          <div className='flex flex-col text-center'>
            <Link href='/'><a className='p-2 hover:text-green-400'>Home</a></Link>
            <Link  href='/blog'><a  className='p-2 hover:text-green-400'>Artikel</a></Link>
            <Link  href='/about'><a className='p-2 hover:text-green-400'>About</a></Link>
            {/* <span className='p-2'>Join :</span> */}
            {/* <div className='flex flex-row mt-4'> */}
            {/*   <a href={ siteData.community.telegram } className='mx-6'><img src={ siteData.icon.telegram } /></a> */}
            {/*   <a href={ siteData.community.facebook } ><img src={ siteData.icon.facebook }/></a> */}
            {/* </div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
