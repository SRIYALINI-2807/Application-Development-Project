import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="header">
        <div className="header-section left">
          <Link to="/" className="portal-name">KidQuest</Link>
        </div>
        <div className="header-section right">
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </header>
      <main className="main-content">
        <div className="content-section">
          <h1 className="content-heading">About Us</h1>
          <p className="content-text">
            <strong>Welcome to KidQuest,</strong> the ultimate read-aloud app designed to turn screen time into story time! Our mission is to create a magical reading experience for children, fostering a love for books and enhancing their literacy skills.
          </p>
          <p className="content-text">
            At KidQuest, we believe that every child deserves the opportunity to explore the enchanting world of stories. Our app offers a vast library of interactive, engaging, and educational books for children of all ages. Whether it's bedtime stories, fairy tales, or educational content, we have something for everyone.
          </p>
          <p className="content-text">
            <strong>Our team</strong> is passionate about education and technology. We work tirelessly to ensure that our app provides a seamless and enjoyable reading experience. We continuously update our library with new content, keeping your child's reading journey exciting and fresh.
          </p>
          <p className="content-text">
            <strong>Thank you for choosing KidQuest.</strong> We are committed to making reading fun and accessible for all children. Join us on this adventure and watch your child's imagination soar!
          </p>
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

export default AboutUs;
