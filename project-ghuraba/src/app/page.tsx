import React from 'react';
import '@/styles/globals.css';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Head tags are handled in index.html or via <Head> in Next.js */}

      <section id="hero-section">
        <header>
          <div className="logo">
            <span>S</span>tudy & <span>I</span>mprove
          </div>

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

          <div>
            <button className="log-in">Log In</button>
          </div>

          <div className="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </header>

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

      <section id="deen-qualification-section">
        <h3>Qualifications For Your Deen</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          consequatur voluptas ex. Quidem eligendi consequatur, est hic id officia
          voluptates. repellendus optio id!
        </p>
        <div className="deen-img">
          <img src="assets/images/img2.webp" alt="deen qualification" />
        </div>
        <div className="brand-info">
          <div className="count">2022 <span>Founded</span></div>
          <div className="count">0000 <span>Product sold</span></div>
          <div className="count">0010 <span>Reviews</span></div>
        </div>
      </section>

      <section id="our-courses-section">
        <div className="course">
          <h3>Our Courses</h3>
          <p>
            If You haven't enrolled in any courses yet! Join a Course & If You haven't set goals yet, increase your
            knowledge by 50%.
          </p>
          <div className="btn">
            <button className="btn1">Join Course</button>
          </div>
        </div>
      </section>

      <section id="best-selling-courses-section">
        <h3>Best Selling Courses</h3>
        <p>Lorem, ipsum dolor sit amet consectetu adipisicing elit. Provident, aperiam?</p>

        <div className="flex-course">
          {/* Course Card - Repeat this structure for all 5 cards */}
          <div className="course-card">
            <img src="assets/images/kur1.jpeg" alt="Quran 101" />
            <p>Quran 101</p>
            <span>Ahmad yahya</span>
            <div className="rating">
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
            </div>
          </div>

          {/* ... add the other 4 cards here the same way ... */}
        </div>
      </section>

      <section id="Catalog-section">
        <h3>Our Catalog</h3>
        <p>Lorem, ipsum dolor sit amet consectetu adipisicing elit. Provident, aperiam?</p>

        <div className="flex-catalog">
          <div className="pattern"></div>

          <div className="catalog-card">
            <div className="img-catalog">
              <img src="assets/images/qur2.jpeg" alt="Catalog item" />
            </div>
            <div className="texts-catalog">
              <p>
                Learn How To Pray Islam - Everything About Islam <br />
                <span>Mufti Menk</span>
              </p>
              <div className="rating">
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star norate"></i>
              </div>
            </div>
          </div>

          {/* Add the remaining 3 catalog cards similarly */}
        </div>
      </section>
    </>
  );
};

export default HomePage;