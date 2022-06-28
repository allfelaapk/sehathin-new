import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import image from '../assets/hero-image.svg';
import { Button } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Profile from '../components/formBmi/Profile';

// function Item(props: BoxProps) {
//   const { sx, ...other } = props;
//   return (
//     <div>
//       <Box
//         sx={{
//           p: 1,
//           m: 1,
//           // ...sx,
//           width: {
//             xs: 100, // theme.breakpoints.up('xs')
//             sm: 200, // theme.breakpoints.up('sm')
//             md: 300, // theme.breakpoints.up('md')
//             lg: 400, // theme.breakpoints.up('lg')
//             xl: 500, // theme.breakpoints.up('xl')
//           },
//         }}
//         {...other}
//       />
//     </div>
//   );
// }

let theme = createTheme();
theme = responsiveFontSizes(theme);

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          p: 1,
          m: 1,
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
              suggestions, Discussion and Doctor Consult in one place to provide
              you achieve it.
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
            <Typography variant="h4">Kalkulator BMI</Typography>
          </div>
          <div>
            <Profile />
          </div>
        </Box>
      </div>
    </div>
  );
}
