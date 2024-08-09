import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import Login from './Login';
import Register from './Register';
import TermsandConditions from './TermsandConditions';
import PrivacyPolicy from './PrivacyPolicy';
import FAQ from './FAQ';
import Contact from './Contact';
import Storyteller from './Storyteller';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<TermsandConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/protected" element={token ? <ProtectedPage /> : <Navigate to="/login" />} />
        <Route path="/storyteller" element={<Storyteller />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const ProtectedPage = () => (
  <div>
    <h2>Protected Page</h2>
    <p>You are logged in!</p>
  </div>
);

export default App;
