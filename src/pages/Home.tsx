import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Card, Avatar, CardContent } from '@mui/material';
import image from '../assets/hero-image.svg';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FormBMI from '../components/formBmi/index';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Poppins',
    ].join(','),
  },
});

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
  // const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      {/* box for hero  */}
      <ThemeProvider theme={theme}>
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
            <ThemeProvider theme={theme}>
              <Typography variant="h3">Set your healthy body goals.</Typography>
              <Typography variant="body1">
                SehaThin combines Meal Planner, Calorie counter, Nutrition food
                suggestions, Discussion and Doctor Consult in one place to
                provide you achieve it.
              </Typography>
            </ThemeProvider>
            <Button
              // classname={classes.root}
              variant="contained"
              sx={{ backgroundColor: '#aedbce', color: 'black' }}
            >
              Get Started
            </Button>
          </div>
        </Box>
      </ThemeProvider>

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
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 60, height: 60 }}
                  />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  sx={{ backgroundColor: '#aedbce', color: 'black' }}
                  variant="outlined"
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </div>
        </Box>
      </div>
    </div>
  );
}
