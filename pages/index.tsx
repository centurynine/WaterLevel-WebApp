import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Head from 'next/head'
import Info from './components/Info'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
      <Head>
        <title>Water Level</title>
        <meta name="Water Level"></meta>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
           
     <section className='bg-white min-h-screen' >
      <Nav/>
      <Info/>
     </section> 
    </main>
    </div>
  )
}