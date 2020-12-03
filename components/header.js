import siteData from '../site-data'
import styles from '../styles/header.module.css'

function Header(){
  return (
    <>
      <div>
      <div className='flex flex-row pt-12'>
        <img src={ siteData.logo } width='400px'/>
        <div className='flex flex-col'>
      <div className='text-xl font-bold text-blue-900'>Selamat datang di</div>
      <div className='text-2xl font-bold'>{ siteData.name }</div>
      <div className=''>{ siteData.description }</div>
                  </div>
    </div>
        </div>
      </>
  )
}

      export default Header
