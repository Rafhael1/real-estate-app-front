import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControledTextField = ({ name, label, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <TextField {...rest} label={label} onChange={onChange} />
      )}
    />
  );
};

export default ControledTextField;
