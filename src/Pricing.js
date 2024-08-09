import React from 'react';
import './Pricing.css'; // Ensure this CSS file is correctly linked

const Pricing = () => {
  return (
    <div className="pricing-page">
      <section className="pricing-section">
        <h2 className="pricing-heading">Choose Your Plan</h2>
        <div className="pricing-container">
          <div className="pricing-box monthly">
            <h3 className="pricing-title">Monthly Plan</h3>
            <p className="pricing-price">199 / month</p>
            <ul className="pricing-features">
              <li>Access to all features</li>
              <li>Priority support</li>
              <li>Regular updates</li>
            </ul>
            <button className="pricing-button">Subscribe</button>
          </div>
          <div className="pricing-box annual">
            <h3 className="pricing-title">Annual Plan</h3>
            <p className="pricing-price">2300 / year</p>
            <ul className="pricing-features">
              <li>Access to all features</li>
              <li>Priority support</li>
              <li>Regular updates</li>
              <li>One month free</li>
            </ul>
            <button className="pricing-button">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-heading">Why Choose Us?</h2>
        <div className="features-slider">
          <div className="feature-slide">
            <img src="https://media.gettyimages.com/id/956516080/photo/first-graders-in-the-classroom.jpg?s=612x612&w=0&k=20&c=CKCRRtHCorsyELQmwxFs2bbYpF2USx1_UfBEImfTD_8=" alt="Interactive Learning" className="feature-image" />
            <div className="feature-info">
              <h3>Interactive Learning</h3>
              <p>Engage your kids with interactive stories and activities that make learning fun and effective.</p>
            </div>
          </div>
          <div className="feature-slide">
            <img src="https://www.verywellfamily.com/thmb/Wx7KzEHuuNzqDEn776Tkvw9k80A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1178068262-ab368577a397420b8c31ce8cc8c081d5.jpg" alt="Customizable Content" className="feature-image" />
            <div className="feature-info">
              <h3>Customizable Content</h3>
              <p>Personalize stories and activities according to your child's interests and learning pace.</p>
            </div>
          </div>
          <div className="feature-slide">
            <img src="https://i.guim.co.uk/img/media/663b30957a4f67771207b49a6e3d598de1e0a2c4/0_134_4968_2981/master/4968.jpg?width=465&dpr=1&s=none" alt="Safe Environment" className="feature-image" />
            <div className="feature-info">
              <h3>Safe Environment</h3>
              <p>Our platform ensures a safe and secure environment for your children to explore and learn.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
