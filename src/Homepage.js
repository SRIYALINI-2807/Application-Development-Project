import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://cdn.pixabay.com/animation/2023/01/09/16/37/16-37-51-550_512.gif',
    'https://cdn.pixabay.com/animation/2024/01/23/23/52/23-52-41-421_512.gif',
    'https://i.pinimg.com/originals/77/67/a8/7767a803444346ed3aad69c1c8524a28.gif',
    'https://cdn.pixabay.com/animation/2024/03/11/05/57/05-57-54-709_512.gif'
  ];

  const handleImageClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-section left">
          <span className="portal-name">KidQuest</span>
        </div>
        <div className="header-section center">
          <h1 className="welcome-message">The best read-aloud app for kids</h1>
        </div>
        <div className="header-section right">
          <Link to="/Storyteller" className="nav-link">Storyteller</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </header>
      <main className="main-content">
        <div className="slider-section">
          <h2 className="slider-heading">Turn Screen Time to Story Time</h2>
          <div className="slider-container" onClick={handleImageClick}>
            <div className="slider-image-box">
              <img src={images[currentIndex]} alt="Slider" className="slider-image" />
            </div>
          </div>
        </div>
        
        <div className="special-features">
          <div className="feature feature-1">
            <div className="feature-text">
              <h3>Feel-good screen time</h3>
              <p>Our app ensures that screen time is enjoyable and beneficial for your kids, combining entertainment with education. It offers a variety of interactive stories that not only engage but also educate. With our curated content, parents can be assured that their children are spending quality time on screen.</p>
            </div>
            <div className="feature-image">
              <img src="https://www.internetmatters.org/wp-content/uploads/2019/06/screen-time-image-internet-matters.png" alt="Feel-good screen time" />
            </div>
          </div>
          <div className="feature feature-2">
            <div className="feature-image">
              <img src="https://images.hindustantimes.com/img/2022/10/07/1600x900/istockphoto-625742448-612x612_1665119778650_1665119788493_1665119788493.jpg" alt="Soothing and non-addictive" />
            </div>
            <div className="feature-text">
              <h3>Soothing and non-addictive</h3>
              <p>Designed to be calming and engaging, our app helps kids unwind with soothing visuals and audio. The content is structured to avoid addictive patterns, ensuring a healthy relationship with technology. Our app promotes relaxation and a sense of well-being, making it a perfect addition to your child's routine.</p>
            </div>
          </div>
          <div className="feature feature-3">
            <div className="feature-text">
              <h3>Build confidence</h3>
              <p>Helps kids build confidence through interactive stories and positive reinforcement. By providing opportunities for children to make choices and see the outcomes of their decisions, our app fosters a sense of accomplishment. This interactive approach encourages children to express themselves and grow more confident in their abilities.</p>
            </div>
            <div className="feature-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTbCmwsJ8w-9Sr7wirL_UzZ7c30rjyUmTvg&s" alt="Build confidence" />
            </div>
          </div>
          <div className="feature feature-4">
            <div className="feature-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75EIO_cPg2lS1nkq4yYmT78LZbwsixQMDew&s" alt="Empower the whole child" />
            </div>
            <div className="feature-text">
              <h3>Empower the whole child</h3>
              <p>Focuses on holistic development, empowering children intellectually and emotionally. Our app offers content that not only educates but also inspires creativity and critical thinking. It helps children explore their interests and develop new skills, providing a balanced approach to their overall growth.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
