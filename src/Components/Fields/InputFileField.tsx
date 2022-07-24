import React from 'react';
import { Controller } from 'react-hook-form';

import { styled, Button } from '@mui/material';

const Input = styled('input')({
  display: 'none'
});

interface InputFileFieldProps {
  name: string;
  control: any;
  [x: string]: any;
}

const InputFileField = ({ name, control, ...rest }: InputFileFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label htmlFor={name}>
          <Input
            id={name}
            accept="image/*"
            type="file"
            onChange={(e) => {
              field.onChange(e.target.files);
            }}
          />
          <Button component="span" {...rest}>
            Select File
          </Button>
        </label>
      )}
    />
  );
};

export default InputFileField;
