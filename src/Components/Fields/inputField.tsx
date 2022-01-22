/**
 * /* eslint-disable @typescript-eslint/explicit-module-boundary-types
 *
 * @format
 */

import React from 'react';
import { TextField } from '@mui/material';
import { FieldTypes } from './types/fieldTypes';

const renderTextField = ({
  input,
  label,
  variant,
  type,
  required,
  style
}: FieldTypes) => (
  <TextField
    required={required}
    label={label}
    variant={variant}
    type={type}
    style={style}
    {...input}
  />
);

renderTextField.defaultProps = {
  style: {
    width: '300px'
  }
};

export default renderTextField;
