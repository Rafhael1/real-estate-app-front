import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import { ICountries } from './../../Types/Search/Search.types';
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { ISearchSlices } from 'Types/Search/Search.types';
import { getSearchResults, getCountries, getCities } from './Search.action';

const initialState = {
  hasResults: false,
  hasRequested: false,
  isLoading: false,
  hasError: false,
  countries: [],
  cities: [],
  posts: []
} as ISearchSlices;

const searchSlices = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Search Results
    builder.addCase(getSearchResults.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getSearchResults.fulfilled,
      (state, action: PayloadAction<IrealEstates[]>) => {
        state.isLoading = false;
        state.hasRequested = true;
        state.hasResults = action.payload.length > 0;
        state.posts = action.payload;
      }
    );
    builder.addCase(getSearchResults.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    // Countries
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
