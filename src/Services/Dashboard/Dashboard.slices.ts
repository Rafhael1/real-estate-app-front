import { createSlice, current } from '@reduxjs/toolkit';
import { IState } from '../../Types/Dashboard/Dashboard.types';
import {
  getRealEstates,
  addNewRealEstate,
  deleteRealEstate
} from './Dashboard.actions';

export const initialState: IState = {
  isLoading: false,
  hasError: false,
  noData: false,
  realEstates: []
};

const dashboardSlices = createSlice({
  name: 'dashboard',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRealEstates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRealEstates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.realEstates = action.payload;
      state.noData = action.payload?.length === 0;
    });
    builder.addCase(getRealEstates.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    // Add new real estate
    builder.addCase(addNewRealEstate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewRealEstate.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addNewRealEstate.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    // Delete real estate
    builder.addCase(deleteRealEstate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteRealEstate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.realEstates = current(state.realEstates).filter(
        (item) => item._id !== action.payload
      );
    });
  },
  reducers: undefined
});

export default dashboardSlices.reducer;
