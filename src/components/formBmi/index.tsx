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

export default function FormBMI() {
  const [gender, setGender] = React.useState('');
  const [indeks, setIndeks] = React.useState({ height: 0, weight: 0 });

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
    // setBmiResult(bmi);
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
          <FormLabel>Cm/Inch</FormLabel>
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
          <FormLabel>Kg/lbs</FormLabel>
        </Box>
        <Button sx={{ my: 2 }} type="submit" variant="contained">
          Calculate
        </Button>
        <Typography variant="body1" gutterBottom>
          {/* {bmiResult} */}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {gender}
        </Typography>
      </FormControl>
    </form>
  );
}
