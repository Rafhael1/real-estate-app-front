import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchSlices } from 'Types/Search/Search.types';
import { getCountries } from './Search.action';

export const initialState: ISearchSlices = {
  isLoading: false,
  hasError: false,
  countries: []
};

const searchSlices = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCountries.fulfilled,
      (state, action: PayloadAction<ISearchSlices>) => {
        state.isLoading = false;
        // @ts-ignore
        state.countries = action.payload;
      }
    );
    builder.addCase(getCountries.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
  reducers: {}
});

export default searchSlices.reducer;
