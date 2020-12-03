import siteData from '../site-data'
import telegram from '../public/assets/icon/telegram-line.svg'


function Header(){
  return (
    <>
      <div style={{backgroundImage: "img('/assets/batik.png')"}}>
      <div className='flex flex-row pt-10'>
        <div className='p-24 mr-24'>{ siteData.logo }</div>
        <div className='flex flex-col'>
      <div className='text-4xl font-bold'>Welcome to { siteData.name }</div>
      <div className=''>{ siteData.description }</div>
          <img src='/assets/icon/telegram-line.svg' />
          </div>
    </div>
        </div>
      </>
  )
}

      export default Header
