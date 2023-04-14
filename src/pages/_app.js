import '@/styles/globals.css'
import Nav from '../../Components/Nav'
import { ThemeProvider } from 'next-themes'
import { Sofia_Sans_Condensed } from 'next/font/google'

const sofia = Sofia_Sans_Condensed({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap'
})


export default function App({ Component, pageProps }) {
  return (
    <main className={sofia.className}>
      <ThemeProvider enableSystam={true} attribute="class">
        <Nav />
        <Component {...pageProps} />
        {/* <style jsx global>{`
                  ${theme.palette.mode === 'dark' ? "body{background:#1c1d24} " : "body{background: #fff} "}`
      }</style> */}

      </ThemeProvider>
    </main>


  )
}
