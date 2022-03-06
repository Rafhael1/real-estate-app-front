import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isLogged } from 'Redux/globalActions/actions';
import { IglobalReducers } from '../types';

export const INITIAL_STATE: IglobalReducers = {
  isLoading: false,
  isAuthenticated: false
};

export const initialState = {
  isLoading: false,
  isAuthenticated: false
};

export const isLoggedSlices = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [isLogged.pending]: (state) => {
      state.isLoading = true;
    },
    [isLogged.fulfilled]: (state, action: PayloadAction<boolean>) => {
      (state.isLoading = false), (state.isAuthenticated = action.payload);
    },
    [isLogged.rejected]: (state) => {
      state.isLoading = false;
    }
  },
  reducers: undefined
});

export default isLoggedSlices.reducer;
