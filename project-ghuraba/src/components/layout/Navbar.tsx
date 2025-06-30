'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <Link href="#" className="nav-link">Home</Link>
      <Link href="#" className="nav-link">Timetable</Link>
      <Link href="#" className="nav-link">Newsletter</Link>
      <Link href="#" className="nav-link">Resources</Link>
      <Link href="#" className="nav-link">Subscribe</Link>
      <button className="btn btn-outline">Log In</button>
    </nav>
  );
};

export default Navbar;
