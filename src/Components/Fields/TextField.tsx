import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControledTextField = ({
  name,
  label,
  control,
  transform = undefined,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        transform ? (
          <TextField
            {...rest}
            {...field}
            label={label}
            onChange={(e) => field.onChange(transform.output(e))}
            value={transform.input(field.value)}
          />
        ) : (
          <TextField {...rest} {...field} label={label} />
        )
      }
    />
  );
};

export default ControledTextField;
