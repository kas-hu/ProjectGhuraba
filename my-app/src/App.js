import React, { useState, useEffect } from 'react';
import './App.css';

// Star component for ratings
const Star = ({ rated }) => (
  <span className={rated ? 'rated' : 'norate'}>★</span>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on nav links
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="hero-section">
        <header>
          <div className="logo"><span>S</span>tudy & <span>I</span>mprove</div>
          
          <nav style={{ right: isMenuOpen ? '0' : '-100%' }}>
            <div className="nav-top">
              <div className="logo"><span>S</span>tudy & <span>I</span>mprove</div>
              <button className="cancel" onClick={toggleMenu}>&times;</button>
            </div>
            
            <ul>
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#timetable" onClick={closeMenu}>Timetable</a></li>
              <li><a href="#newsletter" onClick={closeMenu}>Newsletter</a></li>
              <li><a href="#resources" onClick={closeMenu}>Resources</a></li>
              <li><a href="#subscribe" onClick={closeMenu}>Subscribe</a></li>
            </ul>
          </nav>

          <button className="log-in">Log In</button>
          <div className="menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>

        <div className="content" id="home">
          <p>
            "Allah makes the way to Jannah (Paradise) easy for him who treads the path in search of knowledge."
            <span>Prophet Muhammad (ﷺ)</span>
          </p>

          <div className="img">
            <img src="images/img.jpg" alt="Islamic study" />
          </div>
        </div>

        <div className="pattern"></div>
      </section>

      {/* Rest of your sections remain the same */}
      {/* Deen Qualification, Courses, Catalog, etc. */}

      <footer>
        <p>&copy; 2020 - Study & Improve <br /> All rights reserved </p>
      </footer>
    </div>
  );
}

export default App;
