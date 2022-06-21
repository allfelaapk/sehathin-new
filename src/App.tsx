// import React from 'react';
// import './App.css';
// import Navbar from './components/layout/Navbar';
// import { Route, Routes } from 'react-router-dom';

// import About from './pages/About';
// import Article from './pages/Article';
// import Pricing from './pages/Pricing';
// import Home from './pages/Home';

// function App() {
//   return (
//     <>
//       <Navbar />;
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/article" element={<Article />} />
//           <Route path="/pricing" element={<Pricing />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react';
import '../src/App.css';
import Footer from './components/layout/Footer';
import NavRoutes from './routes/NavRoutes';

function App() {
  return (
    <div>
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
