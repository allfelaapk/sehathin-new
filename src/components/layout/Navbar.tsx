import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import '../../App.css';

export default function Navbar() {
  return (
    <div className="nav">
      <p>Sehathin</p>
      <ul>
        <li>
          <Link to="/" style={link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/consult">Consult</Link>
        </li>
        <li>
          <Link to="/article" style={link}>
            Article
          </Link>
        </li>
        <li>
          <Link to="/pricing" style={link}>
            Pricing
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

const link = {
  textDecoration: 'none',
  color: 'black',
};
