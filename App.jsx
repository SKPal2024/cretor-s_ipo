
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import CreatorLogin from './pages/CreatorLogin';
// import CreatorDashboard from './pages/CreatorDashboard';
// import Investor from './pages/Investor';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/creator" element={<CreatorLogin />} />
//         <Route path="/creator/dashboard" element={<CreatorDashboard />} />
//         <Route path="/investor" element={<Investor />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatorLogin from './pages/CreatorLogin';
import CreatorDashboard from './pages/CreatorDashboard';
import Investor from './pages/Investor';
import Sponsor from './pages/Sponsor';


// Add Sponsor if needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<CreatorLogin />} />
        <Route path="/creator/dashboard" element={<CreatorDashboard />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/sponsor" element={<Sponsor />} />
        {/* Add sponsor route later */}
      </Routes>
    </Router>
  );
};

export default App;
