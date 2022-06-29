import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';

export default function Navbar() {
  return (
    <div className="nav">
      <p>Sehathin</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
