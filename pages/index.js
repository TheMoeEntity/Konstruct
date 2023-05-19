import Head from 'next/head'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Hero from '../components/Hero'
import Numbers from '../components/Numbers'
import Products from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Konstruct | Home </title>
        <meta name="description" content="Konstruct" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Products />
        <Numbers />
        <Benefits />
      </main>
    </>
  )
}
