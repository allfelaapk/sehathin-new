import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import CardList from '../components/card/CardList';
import { Container } from '@mui/system';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function Consult() {
  return (
    <>
      <Navbar />
      <Box
        sx={{ px: 2, py: 8, backgroundColor: '#aedbce', textAlign: 'center' }}
      >
        <Chip label="Consult" color="success" />
        <Typography variant="h3">Doctors</Typography>
        <Typography variant="body2">
          Never hesitate to consult nutrition problems to the doctor.
        </Typography>
      </Box>

      <Container>
        <Typography variant="h4" sx={{ mt: 4 }}>
          Recomendation Best Nutritions
        </Typography>

        <CardList />
      </Container>
      <Footer />
    </>
  );
}
