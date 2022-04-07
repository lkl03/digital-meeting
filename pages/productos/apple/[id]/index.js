import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import { Apple } from '../../../../products/Products'

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
const Post = (props, data) => {
  console.log(props.data.blue.value_sell)
  const value = props.data.blue.value_sell
  const router = useRouter()
  const load = Apple.find((props) => props.id === router.query.id);

  const { img, title, id } = load || "";
  return (
    <>
      <Header />
      <h1>Product: {value}</h1>-
    </>
  )
}


export default Post