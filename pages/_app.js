import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/prism-theme.css'
import Head from 'next/head'
import siteData from '../site-data'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='application-name' content='Linux Pekalongan' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Linux Pekalongan' />
        <meta name='description' content='Linux Pekalongan Community' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#111827' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#111827' />

        <link rel='apple-touch-icon' sizes='180x180' href='/assets/icon/kalong.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-32x32.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/static/icons/favicon-16x16.png' color='#111827' />
        <link rel='shortcut icon' href='/static/icons/safari-pinned-tab.svg' />
        <meta name='twitter:card' content='Hey! there' />
        <meta name='twitter:url' content='https://nekonako.me' />
        <meta name='twitter:title' content='Linux Pekalongan Comunity' />
        <meta name='twitter:description' content='Most handsome people in the world' />
        <meta name='twitter:image' content='https://linux-pekalongan.com/assets/icon/kalong.png' />
        <meta name='twitter:creator' content='@Galih_wisnuA' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='PWA App' />
        <meta property='og:description' content='Best PWA App in the world' />
        <meta property='og:site_name' content='PWA App' />
        <meta property='og:url' content='https://linux-pekalongan.com' />
        <meta property='og:image' content='https://linux-pekalongan.com/assets/icon/kalong.png' />
      </Head>
      <div className='min-h-screen p-0 m-0 text-sm antialiased text-gray-700 bg-gray-100 md:text-base font-ubuntu'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
