import React from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../Assets/logo.png';
import './Contactus.css';

const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true });

  return (
    <footer className="footer1">
      <div className={`footer-content ${footerInView ? 'fade-in-up' : ''}`} ref={footerRef}>
        <div className="footer-section logo-section">
          <img src={img1} alt="logo" />
          <p>+91 9751448561</p>
          <p>rpntechworld@gmail.com</p>
          <p>Chennai, Tamilnadu, India</p>
        </div>
        <div className="footer-section service-section">
          <h3>Service</h3>
          <p>APK Development</p>
          <p>Website Development</p>
          <p>UX/UI Design</p>
          <p>Branding</p>
          <p>Social Media Marketing</p>
        </div>
        <div className="footer-section service-section">
          <h3>Service</h3>
          <p>APK Development</p>
          <p>Website Development</p>
          <p>UX/UI Design</p>
          <p>Branding</p>
          <p>Social Media Marketing</p>
        </div>
        <div className="footer-section about-section">
          <h3>About</h3>
          <p>About Us</p>
          <p>Career</p>
          <p>Team</p>
          <p>Blog</p>
        </div>
      </div>
      <div className={`footer-bottom ${footerInView ? 'fade-in-up' : ''}`}>
        <p>copyrights@2024</p>
        <p>RPN TECH WORLD</p>
      </div>
    </footer>
  );
};

export default Footer;
