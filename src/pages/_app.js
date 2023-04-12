import '@/styles/globals.css'
import Nav from '../../Components/Nav'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystam={true} attribute="class">
      <Nav />
      <Component {...pageProps} />

    </ThemeProvider>



  )
}
