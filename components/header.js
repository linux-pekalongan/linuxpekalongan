import siteData from '../site-data'
import styles from '../styles/header.module.css'

function Header(){
  return (
    <>
      {/* Header */}
        <header>
          <div className='flex flex-row h-screen pt-12 mx-0 text-white md:pt-4 md:w-1/2'>
            <div className='flex flex-col p-12 md:p-28'>
              <div className='pb-4 text-3xl font-bold text-green-400 md:text-4xl'>{ siteData.name }</div>
              <div className=''>{ siteData.description }</div>
            </div>
          </div>
        </header>
      </>
  )
}

      export default Header
