import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState, UserType } from '../../Types/Auth/Auth.types';
import {
  login,
  register,
  isLogged,
  logout,
  getUserLocation
} from './Auth.actions';

export const initialState: IState = {
  isLoading: false,
  isLoadingLocation: false,
  hasError: false,
  isAuthenticated: false,
  user: {
    email: '',
    name: '',
    _id: '',
    city: '',
    country: ''
  }
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{ isLogged: boolean; user: UserType }>
        ) => {
          state.isLoading = false;
          state.isAuthenticated = action.payload.isLogged;
          state.user = {
            _id: action.payload.user?._id,
            email: action.payload.user?.email,
            name: action.payload.user?.name
          };
        }
      )
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
    // Register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      register.fulfilled,
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
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    // Is logged
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
    // Logout
    builder.addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.user = {
        ...state.user,
        email: '',
        name: '',
        _id: ''
      };
    });
    // Get user location
    builder.addCase(getUserLocation.pending, (state) => {
      state.isLoadingLocation = true;
    });
    builder.addCase(
      getUserLocation.fulfilled,
      (state, action: PayloadAction<{ city: string; country: string }>) => {
        state.isLoadingLocation = false;
        state.user = {
          ...state.user,
          city: action.payload.city,
          country: action.payload.country
        };
      }
    );
    builder.addCase(getUserLocation.rejected, (state) => {
      state.isLoadingLocation = false;
    });
  },
  reducers: {}
});

export default authSlices.reducer;
