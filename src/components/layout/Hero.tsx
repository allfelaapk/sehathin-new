/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import image from '../../assets/images/undraw_medicine_b-1-ol.svg';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function HeroSection() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '640px',
          paddingTop: 12,
          mx: { xs: 2, md: 4},
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={image}
              alt='hero image'
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'justify',
                gap: 2,
                py: { xs: 2, md: 4 },
              }}
            >
              <Typography variant='h4' sx={{ fontSize: { xs: '1.2em', md: '2.25em'}, fontWeight: 'bold' }}>Set your healthy body goals.</Typography>
              <Typography variant='body1' sx={{ fontSize: { xs: '1em', md: '1.2em'} }}>
                SehaThin combines Meal Planner, Calorie counter, Nutrition food
                suggestions, Discussion and Doctor Consult in one place to help you
                achieve them.
              </Typography>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#19AE15',
                  color: 'white',
                  width: { xs: '100%', md: '200px'},
                  borderRadius: '50px',
                }}
                onClick={navigateToAbout}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
