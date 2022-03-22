import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import { Iphone } from '../../../../products/Products'
import ProductLayout from '../../../../components/ProductLayout'

const Post = (props) => {
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
      />
    </>
  )
}

export default Post