import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'

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
      </main>
    </>
  )
}
