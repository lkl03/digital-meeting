import { useState, useEffect } from "react";
import Square from './Square'
//import { db } from '../firebase.js';
import { collection, onSnapshot, getDocs, orderBy, query, where } from "firebase/firestore"
import {value} from '../pages/index'
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDIQY3athH52-6bfUIGAA-RWxArJgezeI8",
    authDomain: "iphone-access.firebaseapp.com",
    projectId: "iphone-access",
    storageBucket: "iphone-access.appspot.com",
    messagingSenderId: "1079020891062",
    appId: "1:1079020891062:web:47f384ad4a7fcb1dcbaf17",
    measurementId: "G-2WVL11YKN6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Grid = ({dolar}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const itemsRef = query(collection(db, 'products'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }, [])

    const sortByHighestPrice = () => {
        const itemsRef = query(collection(db, 'products'), orderBy('price', 'desc'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }

    const sortByLowestPrice = () => {
        const itemsRef = query(collection(db, 'products'), orderBy('price', 'asc'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }

    const sortByNewestModel = () => {
        const itemsRef = query(collection(db, 'products'), orderBy('new', 'desc'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }

    const showIphoneOnly = () => {
        const itemsRef = query(collection(db, 'products'), where('type', '==', 'Iphone'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }

    const showMacbookOnly = () => {
        const itemsRef = query(collection(db, 'products'), where('type', '==', 'Macbook'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }
    
    const showAll = () => {
        const itemsRef = query(collection(db, 'products'))
        getDocs(itemsRef)
            .then(res => {
                setProducts(res.docs.map((item) => ({ sku: item.id, ...item.data() })
                ))
            })
            .finally(() => setLoading(false))
    }

    return (
        <>
            <Link href="https://api.whatsapp.com/send?phone=541138041955">
            <a className="float">
                <FaWhatsapp className="fa fa-whatsapp my-float"></FaWhatsapp>
            </a>
            </Link>
            <div className="grid">
            {loading ? (<div>
                <h3 style={{textAlign: 'center'}}>Cargando productos...</h3>
            </div>) : (
                <>
                <h2 className='grid-title'>Nuestros Productos</h2>
                <div className="grid-buttons">
                    <div className="grid-buttons--left">
                            <p>Ordenar por</p>
                            <div>
                                <button type="button" onClick={sortByHighestPrice}>Precio (mayor a menor)</button>
                                <button type="button" onClick={sortByLowestPrice}>Precio (menor a mayor)</button>
                                <button type="button" onClick={sortByNewestModel}>Más nuevos</button>
                            </div>
                    </div>
                    <div className="grid-buttons--right">
                            <p>Filtrar</p>
                            <div>
                                <button type="button" onClick={showIphoneOnly}>iPhone</button>
                                <button type="button" onClick={showMacbookOnly}>Macbooks</button>
                                <button type="button" onClick={showAll}>Ver todos los productos</button>
                            </div>
                    </div>
                </div>

                <div className="grid-list" style={{ display: 'flex' }}>
                    {products.map((product, i) => (
                        <div className="square" key={product.id}>
                            <h3 className="square-title">{product.title} <span style={{fontStyle: 'italic', fontWeight: '300'}}>{product.capacity}{product.capacity === 1 ? 'TB' : 'GB'}</span></h3>
                            <div className="" style={{width: '300px', height: '300px'}}>
                                <img style={{width: '100%', height: 'auto'}} src={product.img} alt="product-image" />
                            </div>
                            <p className="square-price"><span style={{fontWeight: '500'}}>U$</span>{product.price} <span style={{color: '#121212'}}>||</span> <span style={{color: '#00e5fa'}}>${(dolar + 2) * product.price}</span></p>
                            <Link href={`https://wa.me/541138041955?text=Hola!%20Me%20interesa%20este%20producto%20'${product.title}%20${product.capacity}GB'%20que%20vi%20en%20su%20página%20web.`}>
                                <div className="square-button">
                                    <FaWhatsapp style={{width: '20px', height: '20px'}}/> <a>Consultar por este modelo</a>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                </>)}

                <div className="info">
                    <div className="info-section">
                        <p>Estamos tomando el dólar:</p>
                        <h3>${(dolar + 2)}</h3>
                    </div>
                    <div className="info-section">
                        <p>Recorda que hacemos</p>
                        <h3>Envíos GRATIS en CABA!</h3>
                    </div>
                    <div className="info-section">
                        <p>Todos nuestros productos son</p>
                        <h3>Nuevos, originales y en caja sellada</h3>
                        <p>Y cuentan con</p>
                        <h3>Garantia oficial de Apple por 1 año</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Grid