import {
  Typography,
  FormControl,
  Box,
  RadioGroup,
  FormControlLabel,
  TextField,
  FormLabel,
  Button,
  Radio,
} from '@mui/material';
import * as React from 'react';
// import healthy from '../../assets/healthy.png';
// import overweight from '../../assets/overweight.png';
// import underweight from '../../assets/underweight.png';

let bmi: any;
let img: any;

// interface Arr {
//   img: string
//   name: string
// }
// const result: Arr = [
//   {
//     img: underweight
//     name: 'underweight',
//   },
//   {
//     img: healthy
//     name: 'healthy',
//   },
//   {
//     img: overweight
//     name: 'overweight',
//   },
// ];

export default function FormBMI() {
  const [gender, setGender] = React.useState('');
  const [indeks, setIndeks] = React.useState({ height: 0, weight: 0 });
  const [bmiResult, setBmiResult] = React.useState('');
  const [message, setMessage] = React.useState('');

  // function calculateBmi() {
  //   const total = x;
  //   setBmiResult(total);
  // }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };

  const handleFormIndeks = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target as HTMLInputElement;
    setIndeks({ ...indeks, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(gender);
    console.log(indeks);

    // let weight: any;
    // let height: any;

    if (indeks.weight === 0 || indeks.height === 0) {
      alert('Please field a valid weight and height');
    } else {
      let bmi = indeks.weight / (indeks.height * indeks.height);
      setBmiResult(bmi.toFixed(1));

      // logic for message
      if (bmi < 18.5) {
        setMessage('you are underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage(' you are ideal');
      } else {
        setMessage('oh no, you are overweight');
      }
    }

    //show image based from result

    if (bmi < 1) {
      img = null;
    } else {
      if (bmi < 18.5) {
        img = require('../../assets/underweight.png');
      } else if (bmi >= 18.5 && bmi < 26) {
        img = require('../../assets/healthy.png');
      } else {
        img = require('../../assets/overweight.png');
      }
    }

    // window.location.reload();

    setIndeks({ height: 0, weight: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} variant="standard">
        <Typography variant="h5" gutterBottom>
          BMI
        </Typography>
        <RadioGroup name="gender" value={gender} onChange={handleRadioChange}>
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            fleDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            name="height"
            value={indeks.height}
            onChange={handleFormIndeks}
            size="small"
            label="Height"
            variant="outlined"
          />
          <FormLabel>in M</FormLabel>
        </Box>
        <Box
          sx={{
            my: 2,
            display: 'flex',
            fleDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            name="weight"
            value={indeks.weight}
            onChange={handleFormIndeks}
            size="small"
            label="Weight"
            variant="outlined"
          />
          <FormLabel>Kg</FormLabel>
        </Box>
        <Button
          sx={{ my: 2, backgroundColor: '#aedbce', color: 'black' }}
          type="submit"
          variant="contained"
        >
          Calculate
        </Button>

        <Typography variant="body1" gutterBottom>
          {gender}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your BMI is: {bmiResult}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {message}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 300,
            width: 500,
            maxHeight: { xs: 230, md: 250 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt=""
          src={img}
        />
      </FormControl>
    </form>
  );
}
