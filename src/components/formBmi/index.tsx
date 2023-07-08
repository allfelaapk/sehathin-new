import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  TextField,
  FormLabel,
  Button,
  Radio,
  Modal,
} from '@mui/material';
import healthyImg from '../../assets/images/BMINormal.png';
import overweightImg from '../../assets/images/BMIOverweight.png';
import underweightImg from '../../assets/images/BMIUnderweight.png';

const FormBMI = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cmHeight = event.target.value;
    const meterHeight = parseFloat(cmHeight) / 100;
    setHeight(meterHeight.toString());
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (weight === '' || height === '') {
      alert('Please enter a valid weight and height');
      return;
    }

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue)) {
      alert('Please enter valid numeric values for weight and height');
      return;
    }

    const bmi = weightValue / (heightValue * heightValue);
    setBmiResult(bmi);

    if (bmi < 18.5) {
      setMessage('You are underweight');
      setImage(underweightImg);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage('You are ideal');
      setImage(healthyImg);
    } else {
      setMessage('Oh no, you are overweight');
      setImage(overweightImg);
    }

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const inputStyle = {
    mt: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    width: '100%',
  };

  const buttonStyle = {
    my: 2,
    backgroundColor: '#19AE15',
    color: 'white',
    borderRadius: '50px',
    width: '100%',
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    borderRadius: '20px',
    p: 4,
    maxWidth: { xs: '90%', md: 400 },
    width: '100%',
    maxHeight: { xs: '80vh', md: 500 },
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup name="gender" value={gender} onChange={handleRadioChange} row>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <Box sx={ inputStyle }>
            <TextField
              value={(parseFloat(height) * 100).toString()}
              onChange={handleHeightChange}
              size="small"
              label="Height (cm)"
              variant="filled"
              type="number"
              sx={{ width: '100%' }}
            />
          </Box>
          <Box sx={ inputStyle }>
            <TextField
              value={weight}
              onChange={handleWeightChange}
              size="small"
              label="Weight (kg)"
              variant="filled"
              type="number"
              sx={{ width: '100%' }}
            />
          </Box>
          <Button
            sx={ buttonStyle }
            type="submit"
            variant="contained"
            data-testid="buttonForm"
          >
            Calculate
          </Button>
        </form>
      </Box>

      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={ modalStyle }>
          <Typography variant="body1" gutterBottom>
            {gender}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your BMI is: {bmiResult?.toFixed(1)}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {message}
          </Typography>
          {image && (
            <Box
              component="img"
              sx={{
                height: 200,
                width: '100%',
                maxWidth: { xs: 200, md: 250 },
                maxHeight: { xs: 250, md: 300 },
              }}
              alt="BMI Result"
              src={image}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default FormBMI;
