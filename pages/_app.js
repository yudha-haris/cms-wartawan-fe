import store from '@/states'
import '@/styles/globals.css'

import { Poppins, Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
 
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
  return ( 
  <>
    <ToastContainer />
    <main className={`${poppins.variable} font-heading ${roboto.variable} font-body`}>    
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  </>
  )
}
