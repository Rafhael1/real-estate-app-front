import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const AutocompleteField = ({
  options = [],
  name,
  labelSelect,
  label,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <Autocomplete
          {...props}
          {...props.field}
          {...rest}
          options={options}
          autoComplete
          disableClearable
          getOptionLabel={(option) => option[labelSelect]}
          renderInput={(params) => (
            <TextField {...params} {...rest} label={label} />
          )}
          onChange={(_, values) => props.field.onChange(values)}
        />
      )}
    />
  );
};

export default AutocompleteField;
