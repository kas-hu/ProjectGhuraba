'use client';

import React from 'react';
import Navbar from './Navbar';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span>S</span>tudy & <span>I</span>mprove
        </div>
        
        <Navbar />
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;
