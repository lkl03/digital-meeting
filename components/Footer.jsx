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
                <li>© 2022 - Digital Meeting</li>
              </ul>
          </div>
          <div className="footer_buttons">
            <Link href='https://www.instagram.com/digital_meeting/'>
              <a><FaInstagram/></a>
            </Link>
            <Link href='https://www.facebook.com/Digitalmeeting10/'>
              <a><FaFacebook/></a>
            </Link>
            <Link href='https://api.whatsapp.com/send?phone=541127918144'>
              <a><FaWhatsapp/></a>
            </Link>
          </div>
        </div> 
      </div>
  )
}

export default Footer