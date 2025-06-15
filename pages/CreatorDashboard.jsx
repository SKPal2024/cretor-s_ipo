import React, { useState } from 'react';
import '../style.css';

const CreatorDashboard = () => {
  const [formData, setFormData] = useState({
    shareTitle: '',
    sharePrice: '',
    sharePercentage: '',
    message: '',
    about: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted IPO:', formData);
    alert('IPO Submitted Successfully!');
    // Here you can send data to backend API
  };

  return (
    <div className="dashboard-container">
      <h2>Creator Dashboard</h2>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <label>Share Title</label>
        <input
          type="text"
          name="shareTitle"
          value={formData.shareTitle}
          onChange={handleChange}
          placeholder="e.g., 10% Equity in My Channel"
          required
        />

        <label>Share Price (in ₹)</label>
        <input
          type="number"
          name="sharePrice"
          value={formData.sharePrice}
          onChange={handleChange}
          placeholder="e.g., 500"
          required
        />

        <label>Percentage Offered</label>
        <input
          type="text"
          name="sharePercentage"
          value={formData.sharePercentage}
          onChange={handleChange}
          placeholder="e.g., 10%"
          required
        />

        <label>Message to Investors</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your goals and pitch here..."
          required
        ></textarea>

        <label>About You / Your Channel</label>
        <textarea
          name="about"
          rows="4"
          value={formData.about}
          onChange={handleChange}
          placeholder="Tell investors about your content, growth, and vision..."
          required
        ></textarea>

        <button type="submit">Submit IPO</button>
      </form>
    </div>
  );
};

export default CreatorDashboard;
