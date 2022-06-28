import { FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import React from 'react';

type IProps = {
  label: any;
  options: any;
  required: any;
  name: any;
  value: any;
  onChange: () => void;
};

const RadioInput: React.FC<IProps> = ({
  label,
  options,
  required,
  ...rest
}) => {
  return (
    <div style={{ justifyContent: 'space-between' }} className="flex input">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup {...rest}>
        {options.map((option: any) => (
          <FormControlLabel
            value={option}
            control={<Radio color="primary" required={required} />}
            label={option}
            key={option}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioInput;
