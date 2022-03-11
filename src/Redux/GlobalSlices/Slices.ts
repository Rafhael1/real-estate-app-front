import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isLogged } from 'Redux/GlobalActions/Actions';
import { IglobalReducers } from '../Types';

export const initialState: IglobalReducers = {
  isLoading: false,
  isAuthenticated: false
};

export const isLoggedSlices = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(isLogged.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      isLogged.fulfilled,
      (state, action: PayloadAction<{ isLogged: boolean }>) => {
        (state.isLoading = false),
          (state.isAuthenticated = action.payload.isLogged);
      }
    );
    builder.addCase(isLogged.rejected, (state) => {
      state.isLoading = false;
    });
  },
  reducers: undefined
});

export default isLoggedSlices.reducer;
