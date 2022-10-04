import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Square from '../components/Square'
import Grid from '../components/Grid'
import Footer from '../components/Footer'
import Router, { useRouter } from 'next/router'

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetch(`https://api.bluelytics.com.ar/v2/latest`).then(
    (res) => res.json()
  )
  // Pass data to the page via props
  return { 
    props: { data, }
  }

}
export default function Home (props, data) {
  console.log(props.data.blue.value_sell)
  const value = props.data.blue.value_sell
  return (
    <>
      <Head>
        <title>Iphone Access - Venta de Iphone y productos APPLE, importados, originales y nuevos en caja sellada.</title>
      </Head>
      <Header />
      <Grid dolar={value} />
      <Footer />
    </>
  )
}