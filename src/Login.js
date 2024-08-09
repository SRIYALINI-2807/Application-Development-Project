import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [success, setSuccess] = useState(null); // Success state for successful login message
  const [error, setError] = useState(null); // Error state for invalid login message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null); // Clear previous success message
    setError(null); // Clear previous error message

    // Validation conditions
    if (formData.username.length <= 8) {
      setError('Username must be more than 8 characters long.');
      return;
    }

    if (formData.password.length <= 8) {
      setError('Password must be more than 8 characters long.');
      return;
    }

    // Hardcoded credentials check
    if (formData.username === 'Sriyalini' && formData.password === 'qwer12345') {
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => navigate('/protected'), 2000); // Redirect after 2 seconds
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
