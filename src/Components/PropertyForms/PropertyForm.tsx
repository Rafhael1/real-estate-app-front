import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'Hooks/Redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { TextField } from 'Components';
import { Box, Button } from '@mui/material';

const PropertyForm = ({ control }) => {
  return (
    <Box>
      <TextField
        name="title"
        placeholder="Beach house by the black sea"
        label={'Post title'}
        control={control}
      />
      <TextField
        name="description"
        placeholder="Description"
        label="Description"
        control={control}
      />
      <TextField
        name="squareMeter"
        label="Square meters"
        placeholder="55"
        control={control}
      />
      <TextField
        name="bathrooms"
        placeholder="3"
        label="Bathrooms"
        control={control}
      />
      <TextField
        name="bedrooms"
        placeholder="4"
        type="number"
        label="Bedrooms"
        control={control}
      />
      <TextField
        name="address"
        placeholder="Address"
        label="Address"
        control={control}
      />
      <TextField
        name="country"
        placeholder="Bulgaria"
        label="Country"
        control={control}
      />
      <TextField
        name="price"
        placeholder="Price"
        label="Price"
        control={control}
      />
      <TextField
        name="status"
        placeholder="For sale"
        label="Status"
        control={control}
      />
    </Box>
  );
};

export default PropertyForm;
