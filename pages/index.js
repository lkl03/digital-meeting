import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Square from '../components/Square'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Meeting</title>
      </Head>
      <Header />
      <Grid />
      <Footer />
    </>
  )
}
