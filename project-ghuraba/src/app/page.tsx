'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Study & Improve | Islamic Learning Platform</title>
        <meta name="description" content="Enhance your Islamic knowledge with our curated courses and resources." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              "Allah makes the way to Jannah easy for those who seek knowledge"
            </h1>
            <p className="hero-description">
              Join thousands of students who are transforming their Islamic knowledge through our structured courses taught by qualified scholars.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Explore Courses</button>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/images/img.jpg" alt="Islamic study" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">2022</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deen Qualification Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Qualifications For Your Deen</h2>
          <p className="section-subtitle text-center mb-3xl">
            Our mission is to provide authentic Islamic knowledge with qualified scholars and ease of learning for Muslims worldwide.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3xl items-center">
            <div className="md:w-1/2">
              <img 
                src="/assets/images/img2.webp" 
                alt="Islamic study group" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-3xl">
                <div className="bg-white p-2xl rounded-xl text-center shadow-md hover:shadow-lg transition">
                  <h4 className="text-primary text-4xl font-bold mb-sm">2022</h4>
                  <p className="text-gray">Founded</p>
                </div>
                <div className="bg-white p-2xl rounded-xl text-center shadow-md hover:shadow-lg transition">
                  <h4 className="text-primary text-4xl font-bold mb-sm">5,000+</h4>
                  <p className="text-gray">Students Enrolled</p>
                </div>
                <div className="bg-white p-2xl rounded-xl text-center shadow-md hover:shadow-lg transition">
                  <h4 className="text-primary text-4xl font-bold mb-sm">98%</h4>
                  <p className="text-gray">Satisfaction Rate</p>
                </div>
                <div className="bg-white p-2xl rounded-xl text-center shadow-md hover:shadow-lg transition">
                  <h4 className="text-primary text-4xl font-bold mb-sm">50+</h4>
                  <p className="text-gray">Courses Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="section bg-gray-light">
        <div className="container">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle text-center mb-3xl">
            Join our comprehensive courses taught by qualified scholars and take your Islamic knowledge to the next level.
          </p>
          
          <div className="courses-grid">
            <div className="course-card">
              <img 
                src="/assets/images/kur1.jpeg" 
                alt="Quran 101" 
                className="course-image"
              />
              <div className="course-content">
                <h3 className="course-title">Quranic Studies</h3>
                <p className="course-instructor">Ahmad Yahya</p>
                <p className="mb-lg">
                  Master Tajweed, Memorization, and Tafsir with our structured Quran courses.
                </p>
                <div className="course-meta">
                  <div className="course-rating">
                    <div className="star">★★★★★</div>
                    <span>4.8</span>
                  </div>
                  <span className="text-primary font-bold">$19.99</span>
                </div>
                <button className="btn btn-primary w-full mt-xl">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle text-center mb-3xl">
            Hear from those who have benefited from our courses and resources.
          </p>
          
          <div className="testimonial">
            <p className="testimonial-quote">
              The Quran memorization course completely transformed my relationship with the Quran. The teachers are patient and knowledgeable.
            </p>
            <div className="testimonial-author">
              <img 
                src="/assets/images/testimonial1.jpg" 
                alt="Saeed Ahmed" 
                className="testimonial-avatar"
              />
              <div>
                <div className="testimonial-name">Saeed Ahmed</div>
                <div className="testimonial-position">Quran Student</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Join Our Community</h2>
            <p className="section-subtitle mb-3xl">
              Subscribe to our newsletter for weekly Islamic reminders, new course announcements, and study resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-md justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-xl py-md rounded-md focus:outline-none flex-grow text-dark"
                required
              />
              <button 
                type="submit" 
                className="btn btn-outline bg-white text-primary hover:bg-white hover:text-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
