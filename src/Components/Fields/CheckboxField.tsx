import React from 'react';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FieldTypes } from '../../Types/Fields/Fields.types';

const renderCheckboxField = ({
  input,
  label,
  color,
  icon,
  size,
  style,
  ...custom
}: FieldTypes) => (
  <FormControlLabel
    label={label}
    control={
      <Checkbox
        icon={icon}
        color={color}
        size={size}
        sx={style}
        {...input}
        {...custom}
      />
    }
  />
);

export default renderCheckboxField;
