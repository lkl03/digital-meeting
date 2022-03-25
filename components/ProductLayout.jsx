import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaWhatsapp } from 'react-icons/fa'

const ProductLayout = (props) => {
    
    const [fullSize, setFullSize] = useState(false)
    const [specifics, setSpecifics] = useState(false)


  
    return (
    <>
        <div className="product_title">
            <Link href="/">
                <a><FaArrowLeft className='product_arrow' /></a>
            </Link>
            <h1>{props.title}</h1>
        </div>
        <div className="product_show">
            <div className="product_show-left">
                <div className={fullSize ? 'product_show-left--content on' : 'product_show-left--content'} onClick={() => setFullSize(!fullSize)}>
                    <img className={fullSize ? 'on' : ''} src={`/products/${props.img}`} alt={props.title}></img>
                </div>
            </div>
            <div className="product_show-right">
                <div className="product_show-right--content">
                    <h3>Descripción</h3>
                    <p>{props.info}</p>
                    <p><span>Colores disponibles: </span>{props.colors}</p>
                    <p><span>Precio: </span>${props.price}</p>
                    <p>Valor en pesos: ${202 * props.price}</p>
                    <button onClick={() => setSpecifics(!specifics)}>Ver especificaciones</button>
                    <div className={specifics ? 'product_show-right--content_especificaciones on' : 'product_show-right--content_especificaciones'} onClick={() => setSpecifics(!specifics)}>
                        <div>
                            <p>{props.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product_priceconverter">
            <h3>Contactanos</h3>
            <Link href="https://api.whatsapp.com/send?phone=541127918144">
                <a>Enviar mensaje <FaWhatsapp /></a>
            </Link>
        </div>
    </>
  )
}

export default ProductLayout