import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isLogged } from 'Redux/GlobalActions/Actions';
import { IglobalReducers } from '../Types';
import { UserType } from 'Pages/Auth/Login/Login.types';

export const initialState: IglobalReducers = {
  isLoading: false,
  isAuthenticated: false,
  user: {
    email: '',
    name: '',
    _id: ''
  }
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
      (state, action: PayloadAction<{ isLogged: boolean; user: UserType }>) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.isLogged;
        state.user = {
          _id: action.payload.user._id,
          email: action.payload.user.email,
          name: action.payload.user.name
        };
      }
    );
    builder.addCase(isLogged.rejected, (state) => {
      state.isLoading = false;
    });
  },
  reducers: undefined
});

export default isLoggedSlices.reducer;
