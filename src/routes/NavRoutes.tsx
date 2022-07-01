import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Article from '../pages/Article';
import Pricing from '../pages/Pricing';
import Login from '../pages/auth/Login';

function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default NavRoutes;
