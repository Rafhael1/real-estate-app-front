import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState, UserType } from '../../Types/Auth/Auth.types';
import { login, isLogged, logout } from './Auth.actions';

export const initialState: IState = {
  isLoading: false,
  hasError: false,
  isAuthenticated: false,
  user: {
    email: '',
    name: '',
    _id: ''
  }
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<{ isLogged: boolean; user: UserType }>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = {
          _id: action.payload.user?._id,
          email: action.payload.user?.email,
          name: action.payload.user?.name
        };
      }
    );
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(isLogged.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      isLogged.fulfilled,
      (state, action: PayloadAction<{ isLogged: boolean; user: UserType }>) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.isLogged;
        state.user = {
          _id: action.payload.user?._id,
          email: action.payload.user?.email,
          name: action.payload.user?.name
        };
      }
    );
    builder.addCase(isLogged.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.user = {
        email: '',
        name: '',
        _id: ''
      };
    });
  },
  reducers: {}
});

export default authSlices.reducer;
