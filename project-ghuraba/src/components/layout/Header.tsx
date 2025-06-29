'use client';
import React from 'react';
import NavBar from './Navbar';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <span>S</span>tudy & <span>I</span>mprove
      </div>

      <NavBar />

      <div>
        <button className="log-in">Log In</button>
      </div>

      <div className="menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;