import { Container, Box, Typography, Grid } from '@mui/material';
import image1 from '../assets/images/1.webp';
import image2 from '../assets/images/2.webp';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Jumbotron from '../components/layout/Jumbotron';

export default function About() {
  return (
    <>
      <Navbar />
      <Jumbotron
        label="About Us"
        title="Hello, We’re SehaThin."
        subtitle="Our Mission is provide your need to achieve healthy body goals"
      />

      <Container>
        <Grid container spacing={4} my={4}>
          <Grid item xs={12} sm={6}>
            <Box my={2} sx={{ textAlign: 'justify' }}>
              <Typography
                variant='h5'
                component='h5'
                pb={4}
                fontWeight='bolder'
              >
                Gain weight with SehaThin
              </Typography>
              <Typography variant='body2' component='p'>
                We know that gaining weight is not easy. But by using SehaThin,
                you will have all the tools you need to make it easier for you
                to gain weight healthily.
                Tracking nutrition and physical activity is proven to be very
                effective in managing your healthy lifestyle. The more you track
                your nutrition, the higher your chances of gaining weight.
                That's why every successful gain weight program recommends you
                keep a food and/or exercise diary.
                Recording all meals and meals eaten without the necessary tools
                can be a tedious task, and most likely a tedious task. So,
                SehaThin strives to create the best conditions for recording
                food. After all, the easier it is for you to keep a food diary,
                the higher the chances that you will not deviate from the chosen
                path and successfully reach your goal.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={image1}
              alt='img'
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} my={4}>
          <Grid item xs={12} sm={6}>
            <Box my={2} sx={{ textAlign: 'justify' }}>
              <Typography
                variant='h5'
                component='h5'
                pb={4}
                fontWeight='bolder'
              >
                Plan your nutritions with expert
              </Typography>
              <Typography variant='body2' component='p'>
                Planning your nutrition with an expert is an essential step towards 
                achieving a healthy and balanced lifestyle with the abundance of information 
                available, it can be overwhelming to navigate through various dietary 
                choices and decipher what truly works for you. That's where a nutrition expert 
                comes in. These knowledgeable professionals possess a deep understanding of the 
                human body's nutritional needs and can tailor a personalized plan to meet your 
                specific goals and requirements. Whether you aim to lose weight, build muscle, 
                or simply improve your overall well-being, collaborating with a nutrition expert 
                ensures that you receive evidence-based advice and practical strategies.
                From analyzing your current eating habits to designing meal plans and suggesting 
                appropriate supplementation, these experts provide invaluable guidance every step of the way. 
                They help you establish healthy eating patterns, educate you about the significance of 
                essential nutrients, and offer ongoing support to keep you motivated on your journey.
                By entrusting your nutrition planning to an expert, you gain the knowledge and tools necessary 
                to make informed choices, leading to a healthier and more vibrant life.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={image2}
              alt='img'
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
