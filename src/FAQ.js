import React from 'react';
import './FAQ.css'; // If you want to use the same styles, import TermsAndConditions.css

const FAQ = () => {
return (
    <div className="faq">
    <h1>Frequently Asked Questions (FAQ)</h1>
    <h2>What is KidQuest?</h2>
    <p>KidQuest is an interactive read-aloud app designed for kids. It combines entertainment with education to provide a fun and beneficial screen time experience.</p>
    <h2>How do I sign up?</h2>
    <p>To sign up, click on the "Register" link in the navigation bar and fill out the registration form. Once you submit the form, you will receive a confirmation email.</p>
    <h2>Is there a subscription fee?</h2>
    <p>Yes, KidQuest offers various subscription plans. You can view the details and pricing on our "Pricing" page.</p>
    <h2>Can I cancel my subscription?</h2>
    <p>Yes, you can cancel your subscription at any time. Go to your account settings and select the option to cancel your subscription.</p>
    <h2>How do I contact customer support?</h2>
    <p>You can contact our customer support team by clicking on the "Contact" link in the footer or by emailing us at support@kidquest.com.</p>
    </div>
);
};

export default FAQ;
