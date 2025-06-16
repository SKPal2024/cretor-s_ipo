import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../style.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Animated Gradient Background with Bubbles */}
      <div className="animated-page-background">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Animated Container */}
      <motion.div
        className="app-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
      >
        {/* Slide-down Navbar */}
        <motion.nav
          className="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </motion.nav>

        <main className="main-content">
          <h1>🚀 Creator IPO Exchange</h1>
          <p>Invest in creators. Connect with sponsors. Grow together.</p>

          <div className="cards">
            <div className="card creator" onClick={() => navigate('/creator')}>
              I AM A CREATOR
            </div>
            <div className="card investor" onClick={() => navigate('/investor')}>
              I AM AN INVESTOR
            </div>
            <div className="card sponsor" onClick={() => navigate('/sponsor')}>
              I AM A SPONSOR
            </div>
          </div>
        </main>

        <footer className="footer">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </footer>
      </motion.div>
    </>
  );
};

export default Home;
