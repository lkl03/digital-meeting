import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import { Xiaomi } from '../../../../products/Products'

const Post = (props) => {
  const router = useRouter()
  const load = Xiaomi.find((props) => props.id === router.query.id);

  const { img, title, id } = load || "";
  return (
    <>
      <Header />
      <h1>Product: {title}</h1>
    </>
  )
}

export default Post