import React from 'react';
import './Contact.css'; // If you want to use the same styles, import TermsAndConditions.css

const Contact = () => {
return (
    <div className="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions, feedback, or concerns, please reach out to us. We'd love to hear from you!</p>
    <h2>Email</h2>
    <p>You can email us at <a href="mailto:support@kidquest.com">support@kidquest.com</a> for any support-related inquiries.</p>
    <h2>Phone</h2>
    <p>Call us at (123) 456-7890. Our support team is available Monday to Friday from 9 AM to 5 PM.</p>
    <h2>Mailing Address</h2>
    <p>
        KidQuest Inc.<br />
        123 Story Lane<br />
        Imagination City, IC 45678<br />
        USA
    </p>
    </div>
);
};

export default Contact;
