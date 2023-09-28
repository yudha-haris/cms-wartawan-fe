import '@/styles/globals.css'

import { Poppins, Roboto } from 'next/font/google'
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }) {
  return ( <main className={`${poppins.variable} font-heading ${roboto.variable} font-body`}>
      <Component {...pageProps} />
  </main>
  )
}
