import '@/styles/globals.css'

import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  console.log('APP',Component)
  return <>oh~~<Layout><Component {...pageProps}/></Layout></> 
}
