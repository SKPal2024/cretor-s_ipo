// src/pages/CreatorLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const CreatorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add validation or backend API call here
    navigate('/creator/dashboard');
  };

  return (
    <div className="creator-login-container">
      <h2>Creator Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CreatorLogin;
