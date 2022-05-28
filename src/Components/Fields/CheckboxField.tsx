import React from 'react';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';

const CheckboxField = ({ name, label, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <FormControlLabel
          label={label}
          control={<Checkbox {...rest} />}
          onChange={onChange}
        />
      )}
    />
  );
};

export default CheckboxField;
