'use client';
import React from 'react';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <section id="hero-section">
        {/* ✅ REPLACED INLINE HEADER WITH COMPONENT */}
        <Header />

        <div className="content">
          <p>
            “Allah makes the way to Jannah (Paradise) easy for him who treads the path in search of knowledge."
            <span>Prophet Muhammad (ﷺ)</span>
          </p>
          <div className="img">
            <img src="/assets/images/img.jpg" alt="hero" />
          </div>
        </div>

        <div className="pattern"></div>
      </section>

      {/* You can leave the rest of the sections as is */}
    </>
  );
};

export default HomePage;