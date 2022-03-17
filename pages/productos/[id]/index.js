import { useRouter } from 'next/router'
import Header from '../../../components/header'
import { Iphone, Macbooks, Xiaomi } from '../../../products/Iphone'

const Post = (props) => {
  const router = useRouter()
  const load = Iphone.find((props) => props.id === router.query.id);

  const { img, title, id } = load || "";
  return (
    <>
      <Header />
      <h1>Product: {title}</h1>
    </>
  )
}

export default Post