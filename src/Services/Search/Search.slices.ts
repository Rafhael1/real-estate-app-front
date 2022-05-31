import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchSlices, Countries } from 'Types/Search/Search.types';
import { getCountries, getCities } from './Search.action';

export const initialState: ISearchSlices = {
  isLoading: false,
  hasError: false,
  countries: [],
  cities: []
};

const searchSlices = createSlice({
  name: 'search',
  initialState,
  // Countries
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    });
    builder.addCase(getCountries.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    // Cities
    builder.addCase(getCities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
    });
    builder.addCase(getCities.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
  reducers: {}
});

export default searchSlices.reducer;
