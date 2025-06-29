'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <span>S</span>tudy & <span>I</span>mprove
        </div>

        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Study & Improve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
