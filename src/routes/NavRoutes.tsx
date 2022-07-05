import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Article from '../pages/Article';
import Pricing from '../pages/Pricing';
import Consult from '../pages/Consult';
import Login from '../pages/auth/Login';

function NavRoutes() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/article" element={<Article />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </>
  );
}

export default NavRoutes;
