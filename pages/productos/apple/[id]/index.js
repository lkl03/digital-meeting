import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import { Apple } from '../../../../products/Products'

const Post = (props) => {
  const router = useRouter()
  const load = Apple.find((props) => props.id === router.query.id);

  const { img, title, id } = load || "";
  return (
    <>
      <Header />
      <h1>Product: {title}</h1>
    </>
  )
}

export default Post