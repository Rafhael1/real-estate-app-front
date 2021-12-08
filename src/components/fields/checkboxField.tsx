

import React from 'react'
import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FieldTypes } from './types/fieldTypes'

const renderCheckboxField = ({
  input,
  label,
  color,
  icon,
  size,
  ...custom
}: FieldTypes) => (
  <FormControlLabel
    label={label}
    control={
      <Checkbox icon={icon} color={color} size={size} {...input} {...custom} />
    }
  />
)

export default renderCheckboxField
