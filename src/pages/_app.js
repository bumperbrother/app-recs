import '@/styles/globals.css'
import Head from 'next/head'
import { AppProvider } from '@/context/AppContext'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Accounting Firm's Tech Stack</title>
        <meta name="description" content="Interactive guide to accounting firm's technology stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}
