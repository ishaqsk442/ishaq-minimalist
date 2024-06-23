import React from 'react';
import './Footer.css';
import footerline from '../Assets/footerline.png'
import footerlogo from '../Assets/footerLogo.png'
import socialMedialogos from "../Assets/socialMedialogos.png"

const Footer = () => (
    <footer className="footer">
        <img className='footer-top-lines' src={footerline} alt="footerline" />
        <div className='social-div'>
            <img className='footer-logo' src={footerlogo} alt="footer-logo" />
            <div>

                <p className="follow">Follow us on</p>
                <img src={socialMedialogos} alt="social-media-icons"/>

            </div>
            <img className='footer-logo' src={footerlogo} alt="footer-logo" />
            
        </div>
        
    
         <img className='footer-bottom-lines' src={footerline} alt="footerline"/>
  </footer>
);

export default Footer;
