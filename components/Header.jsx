import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  return (
      <div className="header">
        <div className="header-container">
          <div className="header_logo">
            <p>Logo</p>
          </div>
          <div className="header_buttons">
            <Link href='/'>
              <a><FaInstagram/></a>
            </Link>
            <Link href='/'>
              <a><FaFacebook/></a>
            </Link>
            <Link href='/'>
              <a><FaWhatsapp/></a>
            </Link>
          </div>
        </div> 
      </div>
  )
}

export default Header