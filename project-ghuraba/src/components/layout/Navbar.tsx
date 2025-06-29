'use client';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-top">
        <div className="logo">
          <span>S</span>tudy & <span>I</span>mprove
        </div>
        <div className="menu-cancel">
          <button className="cancel">&times;</button>
        </div>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Timetable</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Subscribe</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
