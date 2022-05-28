import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const AutocompleteField = ({
  options = [],
  name,
  keySelect,
  labelSelect,
  label,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <Autocomplete
            {...rest}
            options={options || []}
            getOptionLabel={(option) => option[labelSelect]}
            renderInput={(params) => (
              <TextField
                {...params}
                {...rest}
                label={label}
                onChange={onChange}
              />
            )}
            onChange={(event, values) => onChange(values[keySelect])}
          />
        );
      }}
    />
  );
};

export default AutocompleteField;
