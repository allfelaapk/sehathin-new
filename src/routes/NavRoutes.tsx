import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Article from '../pages/Article';
import Pricing from '../pages/Pricing';
import Consult from '../pages/Consult';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

function NavRoutes() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
