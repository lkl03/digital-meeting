import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  return (
      <div className="header">
        <div className="header-container">
          <div className="header_logo">
          <Link href="/">
            <a><img src="../../img/logo.png" alt="logo"/></a>
          </Link>
          </div>
          <div className="header_buttons">
            <Link href='https://www.instagram.com/iphoneaccess.ar/' target="_blank">
              <a><FaInstagram/></a>
            </Link>
            <Link href='https://www.facebook.com/iphoneaccess.ar' target="_blank">
              <a><FaFacebook/></a>
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=541138041955' target="_blank">
              <a><FaWhatsapp/></a>
            </Link>
          </div>
        </div> 
        <div className='header-extra'>
          <h3>Encontrá acá ese modelo de <span style={{fontWeight: '700'}}>Apple</span> que tanto buscas, al mejor precio del mercado 😉</h3>
        </div>
      </div>
  )
}

export default Header