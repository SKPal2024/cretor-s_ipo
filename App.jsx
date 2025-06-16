
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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import CreatorLogin from './pages/CreatorLogin';
import CreatorDashboard from './pages/CreatorDashboard';
import Investor from './pages/Investor';
import Sponsor from './pages/Sponsor';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<CreatorLogin />} />
        <Route path="/creator/dashboard" element={<CreatorDashboard />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
