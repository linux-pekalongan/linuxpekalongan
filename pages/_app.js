import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/prism-theme.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='min-h-screen p-0 m-0 text-base antialiased text-gray-700 bg-gray-100 font-ubuntu'>
    <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
