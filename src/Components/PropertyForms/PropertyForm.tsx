import React from 'react';
import { TextField } from 'Components';
import { Container, Grid } from '@mui/material';

const PropertyForm = ({ control }) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField
            name="title"
            placeholder="Beach house by the black sea"
            label={'Post title'}
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            name="description"
            placeholder="Description"
            label="Description"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            name="squareMeter"
            label="Square meters"
            placeholder="55"
            type="number"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            name="bathrooms"
            placeholder="3"
            type="number"
            label="Bathrooms"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            name="bedrooms"
            placeholder="4"
            type="number"
            label="Bedrooms"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            name="address"
            placeholder="Address"
            label="Address"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            name="country"
            placeholder="Bulgaria"
            label="Country"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            name="price"
            placeholder="Price"
            label="Price"
            control={control}
          />
        </Grid>
        <Grid item xs>
          <TextField
            name="status"
            placeholder="For sale"
            label="Status"
            control={control}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyForm;
