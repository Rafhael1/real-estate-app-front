import React, { ReactNode } from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  AutocompleteRenderInputParams
} from '@mui/material';

const AutocompleteField = ({
  input,
  options,
  labelSelect,
  valueSelect,
  label,
  loading,
  handleSearch,
  prefixLabelSelect,
  meta: { touched, error }
}) => {
  const onSearch = (event: any) => {
    const { value } = event.target;

    if (!value) {
      input.onChange(undefined);
    }

    if (handleSearch) {
      handleSearch(value);
    }
  };

  const onClear = (event: any) => {
    if (!event) {
      return;
    }

    const {
      target: { value }
    } = event;
    if (!value && typeof value !== 'number') {
      handleSearch();
    }
  };

  const onChange = (event: any, value: any) => {
    if (value) {
      return input.onChange(valueSelect ? value[valueSelect] : value);
    }

    return input.onChange(undefined);
  };

  return (
    <Box>
      <Autocomplete
        fullWidth
        options={options || []}
        onChange={onChange}
        onInputChange={onClear}
        openText="Expandir"
        closeText="Fechar"
        value={
          (options || []).find(
            (option) => option[valueSelect] === input.value
          ) || null
        }
        noOptionsText="No options"
        getOptionLabel={(option) => option[labelSelect]}
        renderOption={(option) =>
          prefixLabelSelect
            ? `${option[prefixLabelSelect]} - ${option[labelSelect]}`
            : option[prefixLabelSelect]
        }
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={onSearch}
            label={label}
            error={touched && !!error}
            helperText={touched && error}
          />
        )}
      />
      {loading && 'Loading...'}
    </Box>
  );
};
