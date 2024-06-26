import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_logo from '../Assets/insta_logo.jpg'
import whatsapp_logo from '../Assets/whatsapp_logo.jpg'
import gmail_logo from '../Assets/gmail_logo.png'
import pinterest_logo from '../Assets/pinterest_logo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contract</li>
        </ul>
        <div className='footer-socials-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={whatsapp_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={gmail_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest_logo} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}
export default Footer