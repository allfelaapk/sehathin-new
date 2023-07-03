import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Card, Avatar, CardContent } from '@mui/material';
import image from '../assets/hero-image.svg';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import { logout } from '../firebase';
import { useNavigate } from 'react-router-dom';
import FormBMI from '../components/formBmi/index';

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

// const useStyles = makeStyles({
//   root: {
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
// });

export default function HeroSection() {
  // create hook to redirect to another page
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  const navigateToAbout = () => {
    navigate('/about');
  };
  const navigateToConsult = () => {
    navigate('/consult');
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <Button
        size="small"
        sx={{
          backgroundColor: '#aedbce',
          color: 'black',
          float: 'right',
          position: 'relative',
        }}
        variant="outlined"
        onClick={handleLogout}
      >
        logout
      </Button>
      {/* box for hero  */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          p: 5,
          m: 5,
          bgcolor: 'background.paper',
          borderRadius: 1,
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 1000,
            width: 500,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="hero image"
          src={image}
        />
        <div>
          {' '}
          <Typography variant="h3">Set your healthy body goals.</Typography>
          <div>
            <Typography variant="body1">
              SehaThin combines Meal Planner, Calorie counter, Nutrition food
              suggestions, Discussion and Doctor Consult in one place to provide
              you achieve it.
            </Typography>
          </div>
          <Button
            // classname={classes.root}
            variant="contained"
            sx={{ backgroundColor: '#aedbce', color: 'black' }}
            onClick={navigateToAbout}
          >
            Get Started
          </Button>
        </div>
      </Box>

      <div>
        {/* box for section2 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            justifyContent: 'space-evenly',
          }}
        >
          <div>
            <FormBMI />
          </div>
          <div>
            <Typography variant="h5" gutterBottom component="div">
              Our Doctor
            </Typography>
            <Typography variant="body1" gutterBottom>
              We have a professional doctor to help your body fit
            </Typography>
            <Card sx={{ maxWidth: 345, m: 5 }}>
              <CardActionArea>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                  <Avatar
                    alt="doctor"
                    src="https://source.unsplash.com/pTrhfmj2jDA"
                    sx={{ width: 60, height: 60 }}
                  />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr. Ladusing
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Professional Doctor for Nutrition
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  sx={{ backgroundColor: '#aedbce', color: 'black' }}
                  variant="outlined"
                  onClick={navigateToConsult}
                >
                  Chat Here
                </Button>
              </CardActions>
            </Card>
            <div style={{ display: 'grid', flexDirection: 'column' }}>
              <Card sx={{ maxWidth: 345, m: 5 }}>
                <CardActionArea>
                  <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <Avatar
                      alt="doctor"
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      sx={{ width: 60, height: 60 }}
                    />
                  </div>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dr. Rohayah
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Professional Doctor for Nutrition
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    sx={{ backgroundColor: '#aedbce', color: 'black' }}
                    variant="outlined"
                    onClick={navigateToConsult}
                  >
                    Chat Here
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </Box>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            p: 5,
          }}
        >
          Our Service
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Feature
              </Typography>
              <Typography variant="h5" component="div">
                Meal Planner
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                New Program
              </Typography>
              <Typography variant="body2">
                Provide you to track your meal
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Feature
              </Typography>
              <Typography variant="h5" component="div">
                Calorie Counter
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                New Program
              </Typography>
              <Typography variant="body2">
                Provide you to control your calorie
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Feature
              </Typography>
              <Typography variant="h5" component="div">
                Fitness Program
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                New Program
              </Typography>
              <Typography variant="body2">
                Provide you to keep your body more ideal
                <br />
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
