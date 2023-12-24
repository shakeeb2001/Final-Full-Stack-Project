import React from 'react';
import './footer.css';
import FooterIcon from '../images/newlogo.png';
import InstagramIcon from '../images/instagram.png';
import FacebookIcon from '../images/facebook.png';
import WhatsappIcon from '../images/whatsapp.png';

export default function Footer() {
  return (
    <div className='footer-container'>
      <br></br>
      <h1 className='footer-h1'>Crystel Cascade Hotel</h1>
      
      <img src={FooterIcon} alt="Logo" className="footer-icon" />
      <div className="contact-info">
        <p className="contact-detail">Address: 123 Main Street, Cityville, Country</p>
        <p className="contact-detail">Contact: +1 234 567 890</p>
        <p className="contact-detail">Email: info@crystelcascadehotel.com</p>
        <div className="social-icons">
        <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer">
          <img src={WhatsappIcon} alt="WhatsApp" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61554841954980&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/crystalcascadehotel?igsh=ZTkzdTkydDN4bzE5">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
      </div>
      <div className="text-footer">
      <span>© 2023 Crystel Cascade Hotel</span>
      </div>
      </div>
    </div>
  );
}
