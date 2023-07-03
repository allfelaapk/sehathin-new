import React from 'react';
import { Box, Button, Card, CardContent, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CardList from '../components/card/CardList';
import { Container } from '@mui/system';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function Pricing() {
  return (
    <>
      <Navbar />
      <Box
        sx={{ px: 2, py: 8, backgroundColor: '#aedbce', textAlign: 'center' }}
      >
        <Chip label="Pricing" color="success" />
        <Typography variant="h3">Let's adopt healthier and more meaningful life together with SehaThin
        </Typography>
      </Box>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '30px 0' }}>
        <Card sx={{ maxWidth: 300 }} variant="outlined" style={{ borderRadius: '10px' }}>
          <CardContent>
            <Chip label="Free" color="success" style={{ marginBottom: '10px' }} />
            <Typography variant="h5" component="div">
              IDR 0K/<span style={{fontSize: '12px'}}>Monthly</span>
            </Typography>
            <Typography variant="body2">
              A free account grants you access to exclusive free feature.
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360 }}>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{transform: 'scale(0.5)', fill: 'red'}}>
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Personalized Program" style={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{transform: 'scale(0.5)', fill: 'red'}}>
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Unlimited Consult" style={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{transform: 'scale(0.5)', fill: '#2e7d32'}}>
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Meal Planner" style={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{transform: 'scale(0.5)', fill: '#2e7d32'}}>
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Calorie Counter" style={{ fontSize: '14px' }} />
              </ListItem>
            </List>
            <Button variant="outlined" sx={{width: '100%', boxShadow: 'none', borderRadius: '100px'}} color="success">SELECT PLAN</Button>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300 }} style={{ borderRadius: '10px', backgroundColor: '#aedbce', marginLeft: '10px' }}>
          <CardContent>
            <Chip label="Free" color="success" style={{ marginBottom: '10px' }} />
            <Typography variant="h5" component="div">
              IDR 124K/<span style={{fontSize: '12px'}}>Monthly</span>
            </Typography>
            <Typography variant="body2">
              Boom! You're in the club, you can start your own personalized program and console with our doctor anytime.
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360 }}>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{transform: 'scale(0.5)', fill: '#2e7d32'}}>
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Personalized Program" style={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{transform: 'scale(0.5)', fill: '#2e7d32'}}>
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Unlimited Consult" style={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{transform: 'scale(0.5)', fill: '#2e7d32'}}>
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Meal Planner" style={{ fontSize: '14px' }} />
              </ListItem>
              <ListItem>
                <ListItemIcon style={{minWidth: 30}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{transform: 'scale(0.5)', fill: '#2e7d32'}}>
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Calorie Counter" style={{ fontSize: '14px' }} />
              </ListItem>
            </List>
            <Button variant="contained" sx={{width: '100%', boxShadow: 'none', borderRadius: '100px'}} color="success">SELECT PLAN</Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </>
  );
}
