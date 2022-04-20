import React from 'react';
import { TextField } from '@mui/material';
import { FieldTypes } from '../../Types/Fields/Fields.types';

const renderTextField = ({
  input,
  label,
  variant,
  type,
  autoFocus,
  required,
  style
}: FieldTypes) => (
  <TextField
    required={required}
    label={label}
    variant={variant}
    type={type}
    autoFocus={autoFocus}
    style={style}
    {...input}
  />
);

renderTextField.defaultProps = {};

export default renderTextField;
