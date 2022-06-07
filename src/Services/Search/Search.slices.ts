import { ICountries } from './../../Types/Search/Search.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchSlices } from 'Types/Search/Search.types';
import { getCountries, getCities } from './Search.action';

const initialState = {
  isLoading: false,
  hasError: false,
  countries: [],
  cities: []
} as ISearchSlices;

const searchSlices = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  // Countries
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCountries.fulfilled,
        (state, action: PayloadAction<ICountries[]>) => {
          state.isLoading = false;
          state.countries = action.payload;
        }
      )
      .addCase(getCountries.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
    // Cities
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
        state.cities = [];
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addCase(getCities.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export default searchSlices.reducer;
