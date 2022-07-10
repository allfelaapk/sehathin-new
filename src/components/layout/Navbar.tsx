import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import Box from '@mui/material/Box';
import '../../App.css';
import logo from '../../assets/SehaThin.png';

export default function Navbar() {
  return (
    <div className="nav">
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="logo"
        src={logo}
      />
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
          <Link to="/consult" style={link}>
            Consult
          </Link>
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
