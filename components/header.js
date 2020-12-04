import siteData from '../site-data'
import styles from '../styles/header.module.css'

function Header(){
  return (
    <>
      {/* Header */}
      <header>
        <div className='flex flex-row h-screen pt-12 mx-0 text-white md:pt-4 md:w-1/2'>
          <div className='flex flex-col p-12 md:p-28'>
            <div className='pb-4 text-3xl font-bold md:text-4xl'>Pekalongan<span className='text-green-400'>1337</span></div>
            <div className=''>{ siteData.description }</div>
            <div className='mt-12 text-xl font-extrabold'>Sini join :</div>
            <div className='flex flex-row'>
              <div className='flex flex-row p-3 m-4 bg-purple-500 rounded-lg'>
              <img src={ siteData.icon.telegram }/> <a href={ siteData.community.telegram } className='pl-1'>  Telegram</a>
</div>
              <div className='flex flex-row p-3 m-4 bg-blue-500 rounded-lg'>
              <img src={ siteData.icon.facebook }/> <a href={ siteData.community.facebook } className='pl-3' > Facebook</a>
                </div>
            </div>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
