import React from 'react';
import './PrivacyPolicy.css'; // If you want to use the same styles, import TermsAndConditions.css

const PrivacyPolicy = () => {
return (
    <div className="privacy-policy">
    <h1>Privacy Policy</h1>
    <p>
        Welcome to KidQuest! This privacy policy outlines how we collect, use, and protect your personal information when you use our website and services.
    </p>
    <h2>Information Collection</h2>
    <p>
        We collect various types of information in connection with the services we provide, including:
    </p>
    <ul>
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data (pages visited, time spent on the site, etc.)</li>
        <li>Technical data (IP address, browser type, etc.)</li>
    </ul>
    <h2>Use of Information</h2>
    <p>
        The information we collect is used for various purposes, including:
    </p>
    <ul>
        <li>Providing and maintaining our service</li>
        <li>Improving our website and services</li>
        <li>Communicating with you</li>
        <li>Ensuring the security of our services</li>
    </ul>
    <h2>Information Protection</h2>
    <p>
        We are committed to protecting your personal information. We implement various security measures to ensure the safety of your personal data.
    </p>
    <h2>Third-Party Services</h2>
    <p>
        We may employ third-party companies and individuals to facilitate our services. These third parties have access to your personal information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
    </p>
    <h2>Changes to This Privacy Policy</h2>
    <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
    </p>
    <p>
        If you have any questions about this Privacy Policy, please contact us at contact@kidquest.com.
    </p>
    </div>
);
};

export default PrivacyPolicy;
