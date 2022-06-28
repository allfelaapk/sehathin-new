import { TextField } from '@mui/material';
import React from 'react';

type IProps = {
  options: any;
  rest: any;
  name: any;
  value: {};
  label: any;
  required: boolean;
  onChange: () => void;
};
const SelectInput: React.FC<IProps> = ({ options, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      className="input"
      select
      {...rest}
      SelectProps={{ native: true }}
    >
      <option defaultValue="" style={{ display: 'none' }}></option>
      {options.map((option: any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
  );
};

export default SelectInput;
