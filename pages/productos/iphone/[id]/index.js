import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import { Iphone } from '../../../../products/Products'
import ProductLayout from '../../../../components/ProductLayout'
import Footer from '../../../../components/Footer'

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetch(`https://api.bluelytics.com.ar/v2/latest`).then(
    (res) => res.json()
  )
  // Pass data to the page via props
  return { 
    props: { data }
  }

}

const Post = (props) => {
  console.log(props.data.blue.value_sell)
  const value = props.data.blue.value_sell
  const router = useRouter()
  const load = Iphone.find((props) => props.id === router.query.id);

  const { img, title, id, info, price, colors } = load || "";
  return (
    <>
      <Header />
      <ProductLayout
        title = {title}
        img = {img}
        info = {info}
        price = {price}
        colors = {colors}
        dolar = {value}
      />
      <Footer />
    </>
  )
}

export default Post