/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { TextField } from '@mui/material'


const renderTextField = ({
  input,
  label,
  variant,
  type,
  required,
  width,
  ...custom
}) => (
  <TextField
    required={required}
    label={label}
    variant={variant}
    type={type}
    style={{
      width
    }}
    {...input}
    {...custom}
  />
)

renderTextField.defaultProps = {
  width: '300px'
}

export default renderTextField