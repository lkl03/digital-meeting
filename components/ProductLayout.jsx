import React, {useState} from 'react'
import Image from 'next/image'

const ProductLayout = (props) => {
    
    const [fullSize, setFullSize] = useState(false)
  
    return (
    <>
        <div className="product_title">
            <h1>{props.title}</h1>
        </div>
        <div className="product_show">
            <div className="product_show-left">
                <div className="product_show-left--content" onClick={() => setFullSize(!fullSize)}>
                    <img className={fullSize ? 'on' : 'off'} src={`/products/${props.img}`} alt={props.title}></img>
                </div>
            </div>
            <div className="product_show-right">
                <div className="product_show-right--content">
                    <h3>Descripción</h3>
                    <p>{props.info}</p>
                    <p><span>Colores disponibles: </span>{props.colors}</p>
                    <p><span>Precio: </span>${props.price}</p>
                    <button>Ver especificaciones</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductLayout