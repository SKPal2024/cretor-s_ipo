// src/pages/Sponsor.jsx
import React, { useState } from 'react';
import '../style.css';

const Sponsor = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    product: '',
    budget: '',
    adIdea: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sponsorship proposal submitted successfully!');
    console.log(formData);
    // here you can integrate a backend or Firebase
  };

  return (
    <div className="form-container">
      <h2>📢 Sponsor Proposal</h2>
      <form onSubmit={handleSubmit} className="sponsor-form">
        <input
          type="text"
          name="companyName"
          placeholder="Your Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="product"
          placeholder="Product / Service"
          value={formData.product}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="budget"
          placeholder="Budget for Advertisement (in INR)"
          value={formData.budget}
          onChange={handleChange}
          required
        />
        <textarea
          name="adIdea"
          placeholder="Idea for Advertisement"
          value={formData.adIdea}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message for Creator"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit Proposal</button>
      </form>
    </div>
  );
};

export default Sponsor;
