import React, { ReactNode } from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  AutocompleteRenderInputParams
} from '@mui/material';

const renderAutocompleteField = ({
  input,
  rows,
  multiline,
  label,
  type,
  options,
  optionValRespKey,
  onTextChanged,
  onFetchResult,
  placeholder,
  fieldRef,
  onClick,
  disabled,
  loading,
  filterOptions,
  style,
  meta: { touched, error, warning }
}: any) => {
  return (
    <Box style={style}>
      <Autocomplete
        fullWidth
        options={options.map((option) => option[optionValRespKey])}
        filterOptions={filterOptions}
        onChange={(e, val) => {
          onFetchResult(val);
        }}
        onInputChange={(e, val) => {
          onTextChanged(val);
        }}
        renderInput={(params) => (
          <TextField
            {...input}
            {...params}
            label={label}
            error={touched && !!error}
            helperText={touched && error}
            style={style}
          />
        )}
      />
      {loading && 'Loading...'}
    </Box>
  );
};

export default renderAutocompleteField;
