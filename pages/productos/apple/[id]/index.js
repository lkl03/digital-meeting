import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import { Apple } from '../../../../products/Products'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.bluelytics.com.ar/v2/latest`)
  const data = await res.json()
  console.log(data)

  // Pass data to the page via props
  return { 
    props: { data }
  }

}
const Post = (props, data) => {
  console.log(data)
  const router = useRouter()
  const load = Apple.find((props) => props.id === router.query.id);

  const { img, title, id } = load || "";
  return (
    <>
      <Header />
      <h1>Product: {data.anime}</h1>-
    </>
  )
}


export default Post