import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer_text">
              <ul>
                <li>Envíos a domicilio por moto en el día</li>
                <li>Productos nuevos originales en caja sellada</li>
                <li>Garantía oficial de <strong>Apple</strong> por 1 año en todos sus productos</li>
                <li style={{color: '#00e5fa'}}>© 2022 - Iphone Access</li>
              </ul>
          </div>
          <div className="footer_buttons">
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
      </div>
  )
}

export default Footer