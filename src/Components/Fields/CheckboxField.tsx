import React from 'react';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';

const CheckboxField = ({ name, label, control, ...rest }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Checkbox
              {...rest}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      }
    />
  );
};

export default CheckboxField;
