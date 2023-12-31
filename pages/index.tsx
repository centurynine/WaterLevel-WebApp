import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Head from "next/head";
import Info from "./components/Info";
import About from "./components/About";
import Bottom from "./components/Bottom";
import Tools from "./components/Tools";
import Source from "./components/Source";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <div>
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet"/>
      <Head>
        <title>Water Level</title>
        <meta name="Water Level"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home">
        <section className="bg-white min-h-screen">
          <Nav />
          <Info />
          <Tools />
          <Source />
          <About />
          <Bottom />
          
        </section>
      </main>
    </div>
  );
}
