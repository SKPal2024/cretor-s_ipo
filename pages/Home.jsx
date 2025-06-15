// // src/pages/Home.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../style.css';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="app-container">
//       <nav className="navbar">
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Portfolio</a></li>
//           <li><a href="#">Contact Us</a></li>
//           <li><a href="#">About</a></li>
//         </ul>
//       </nav>

//       <main className="main-content">
//         <h1>🚀 Creator IPO Exchange</h1>
//         <p>Invest in creators. Connect with sponsors. Grow together.</p>

//         <div className="cards">
//           <div className="card creator" onClick={() => navigate('/creator')}>
//             I AM A CREATOR
//           </div>
//           <div className="card investor" onClick={() => navigate('/investor')}>
//             I AM AN INVESTOR
//           </div>
//           <div className="card sponsor" onClick={() => navigate('/sponsor')}>
//             I AM A SPONSOR
//           </div>
//         </div>
//       </main>

//       <footer className="footer">
//         <a href="#">Privacy Policy</a>
//         <a href="#">Terms</a>
//       </footer>
//     </div>
//   );
// };
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Investor from './pages/Investor'; // import

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Your homepage component */}
//         <Route path="/investor" element={<Investor />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <h1>🚀 Creator IPO Exchange</h1>
        <p>Invest in creators. Connect with sponsors. Grow together.</p>

        <div className="cards">
          <div className="card creator" onClick={() => navigate('/creator')}>I AM A CREATOR</div>
          <div className="card investor" onClick={() => navigate('/investor')}>I AM AN INVESTOR</div>
          <div className="card sponsor" onClick={() => navigate('/sponsor')}>I AM A SPONSOR</div>
        </div>
      </main>

      <footer className="footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
      </footer>
    </div>
  );
};

export default Home;
