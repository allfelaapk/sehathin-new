import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/SehaThin.png';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#19AE15',
    color: 'white',
    padding: '4rem 1rem',
  };

  const logoStyle = {
    height: 128,
    width: 128,
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: '0.5rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <Box component="footer" style={ footerStyle }>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              SehaThin
            </Typography>
            <Typography variant="body2">
              Our mission is provide your need to achieve healthy body goals
            </Typography>
            <Link to='/home'>
              <img src={logo} alt='logo' style={logoStyle} />
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h6" gutterBottom>
              Quick Menus
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/home" style={ linkStyle }>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={ linkStyle }>
                  About
                </Link>
              </li>
              <li>
                <Link to="/consult" style={ linkStyle }>
                  Consult
                </Link>
              </li>
              <li>
                <Link to="/article" style={ linkStyle }>
                  Article
                </Link>
              </li>
              <li>
                <Link to="/pricing" style={ linkStyle }>
                  Pricing
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Indonesia
            </Typography>
            <Typography variant="body2">Email: info@sehathin.com</Typography>
            <Typography variant="body2">Phone: +62 345 6789</Typography>
            <Box mt={2}>
              <IconButton href="#" style={{ color: '#inherit' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" style={{ color: '#inherit' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" style={{ color: '#inherit' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" style={{ color: '#inherit' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center">Copyright &reg; {new Date().getFullYear()} FE-HE6 Sponsored from YABB by GoTo</Box>
      </Container>
    </Box>
  );
}
