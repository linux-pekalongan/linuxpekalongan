import Link from 'next/link'
import siteData from '../site-data'

function Navbar(){
  return(
    <div className='w-full p-5 px-40 text-base text-gray-700 bg-white shadow-md'>
      <div className='flex justify-between'>
        <div className='logo'>
          LOGO
        </div>
        <ul className='flex flex-row'>
          <li className='pr-12'><Link href='/'>Home</Link></li>
          <li className='pr-12'><Link href='/blog'>Blog</Link></li>
          <li className=''><Link href='/about'>About</Link></li>
        </ul>
        <div className='flex flex-row'>
          <Link  href={siteData.community.telegram}><a><img className='pr-5' src={siteData.icon.telegram}/></a></Link>
           <Link href={siteData.community.facebook}><a><img src={siteData.icon.facebook}/></a></Link>
        </div>
        </div>
      </div>
  )
}

export default Navbar
