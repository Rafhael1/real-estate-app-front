import React from 'react';
import { Slider } from '@mui/material';
const SliderField = ({ props, input, ariaLabel, defaultValue, track }) => (
  <Slider
    {...props}
    {...input}
    value={input.value}
    onChange={input.onChange}
    getAriaLabel={() => ariaLabel}
    valueLabelDisplay="auto"
    track={track}
    defaultValue={defaultValue}
    min={0}
    max={1000000}
  />
);

export default SliderField;
