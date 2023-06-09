import '@/styles/globals.css'
import Nav from '../../Components/Nav'
import { ThemeProvider } from 'next-themes'
import { Montserrat } from 'next/font/google'
import Footer from '../../Components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap'
})


export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <ThemeProvider enableSystam={true} attribute="class">
        <Nav />
        <Component {...pageProps} />
        {/* <style jsx global>{`
                  ${theme.palette.mode === 'dark' ? "body{background:#1c1d24} " : "body{background: #fff} "}`
      }</style> */}
        <Footer />

      </ThemeProvider>
    </main>


  )
}
