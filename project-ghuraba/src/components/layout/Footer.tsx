'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <span>S</span>tudy & <span>I</span>mprove
            </div>
            <p className="mb-md">
              Providing authentic Islamic knowledge to Muslims worldwide.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-links-title">Quick Links</h4>
            <Link href="#" className="footer-link">Home</Link>
            <Link href="#" className="footer-link">About Us</Link>
            <Link href="#" className="footer-link">Courses</Link>
            <Link href="#" className="footer-link">Resources</Link>
          </div>
          
          <div>
            <h4 className="footer-links-title">Courses</h4>
            <Link href="#" className="footer-link">Quran Studies</Link>
            <Link href="#" className="footer-link">Arabic Language</Link>
            <Link href="#" className="footer-link">Fiqh & Aqeedah</Link>
            <Link href="#" className="footer-link">Seerah</Link>
          </div>
          
          <div>
            <h4 className="footer-links-title">Contact Us</h4>
            <p className="footer-link">
              <i className="fas fa-map-marker-alt mr-sm"></i>
              123 Islamic Center, Madinah Road
            </p>
            <a href="mailto:info@studyandimprove.com" className="footer-link">
              <i className="fas fa-envelope mr-sm"></i>
              info@studyandimprove.com
            </a>
            <a href="tel:+966123456789" className="footer-link">
              <i className="fas fa-phone-alt mr-sm"></i>
              +966 123 456 789
            </a>
          </div>
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} Study & Improve. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
