import { useRef } from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Hero from '../components/layout/Hero';
import Footer from '../components/layout/Footer';
import doctorList from '../doctors.json';
import ServiceCard from '../components/card/ServiceCard';
import FormBMI from '../components/formBmi/index';
import DoctorCard from '../components/card/DoctorCard';
import '../assets/styles/Carousel.css';

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 200;
    }
  };
  
  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 200;
    }
  };

  const bmiStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: { xs: 1, md: 2 },
    padding: { xs: 2, md: 4 },
    borderRadius: 8,
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    color: '#19AE15',
    fontSize: { xs: '1.2em', md: '2.25em' },
  };

  const subtitleStyle = {
    my: 2,
    fontSize: { xs: '1em', md: '1.2em' },
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    pt: 12,
  };

  const gridItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    my: { xs: 2, md: 8 },
  };

  return (
    <>
      <Container>
        <Hero />
        <Box sx={bmiStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={gridItemStyle}>
                <Typography variant='h4' sx={titleStyle}>
                  Calculate Body Mass Index (BMI)
                </Typography>
                <Typography variant='body1' sx={subtitleStyle}>
                  Step into the digital scale of health: Calculate now and let numbers shape your journey to a better you!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormBMI />
            </Grid>
          </Grid>
        </Box>

        <Box sx={sectionStyle}>
          <Typography variant='h4' sx={titleStyle}>
            Our Nutritionists
          </Typography>
          <Typography variant='body1' sx={subtitleStyle}>
            We have experts to help you stay fit
          </Typography>
        </Box>

        <div className="carousel-container" ref={sliderRef}>
          <div className="carousel">
            {doctorList.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                imageUrl={doctor.imageUrl}
              />
            ))}
          </div>
        </div>

        <Button onClick={handleScrollLeft} title="Scroll Left">
          <KeyboardArrowLeft />
        </Button>

        <Button onClick={handleScrollRight} title="Scroll Right">
          <KeyboardArrowRight />
        </Button>

        <Box sx={sectionStyle}>
          <Typography variant='h4' sx={titleStyle}>
            Our Service
          </Typography>
          <Typography variant='body1' sx={subtitleStyle}>
            What can we do for you?
          </Typography>
        </Box>

        <div className="carousel-container">
          <div className="service-carousel">
            <ServiceCard
              image="🕗"
              title="Meal Planner"
              description="Provide you to track your meal"
            />
            <ServiceCard
              image="📝"
              title="Calorie Counter"
              description="Provide you to control calorie"
            />
            <ServiceCard
              image="📱"
              title="Consultation"
              description="Provide you to online consult"
            />
            <ServiceCard
              image="🍳"
              title="Nutrition Food"
              description="Provide you to keep clean eat"
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
