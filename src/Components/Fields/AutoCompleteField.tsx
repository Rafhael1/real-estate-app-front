import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const AutocompleteField = ({
  options = [],
  name,
  labelSelect,
  label,
  control,
  sx,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <Autocomplete
          {...props.field}
          {...rest}
          options={options.length ? options : []}
          autoComplete
          isOptionEqualToValue={(option, value) =>
            option[labelSelect] === value
          }
          getOptionLabel={(option) => (option ? option[labelSelect] : '')}
          renderInput={(params) => (
            <TextField key={1} sx={sx} {...params} label={label} />
          )}
          onChange={(_, values) => props.field.onChange(values)}
        />
      )}
    />
  );
};

export default AutocompleteField;
