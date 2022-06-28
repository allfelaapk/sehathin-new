import { TextField } from '@mui/material';
import React from 'react';

const InputText = ({ ...rest }) => {
  return (
    <TextField variant="outlined" size="small" className="input" {...rest} />
  );
};

export default InputText;
