import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Square = (props) => {
  return (
    <div className="square">
        <div className="square-img">
            <img src={`/products/${props.img}`} width='200px' height='200px' alt={props.title}></img>
        </div>
        <Link href={`/productos/${props.category}/${props.id}`}>
            <div className="square-info">
                <a>{props.title}</a>
            </div>
        </Link>

    </div>
  )
}

export default Square