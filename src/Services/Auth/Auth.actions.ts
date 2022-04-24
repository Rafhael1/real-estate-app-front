import { createAsyncThunk, createAction, nanoid } from '@reduxjs/toolkit';
import axios from 'Config/Axios';
import { showSnackbar } from 'Services/Snackbar/Snackbar.slices';
import handleError from 'Utils/handleError';

import { UserType } from 'Types/Auth/Auth.types';

export const login = createAsyncThunk(
  'login',
  async (values: UserType, { dispatch }) => {
    try {
      const res = (await axios.post('/authentication/login', values)).data;
      if (res.authToken) {
        if (values.rememberMe) {
          localStorage.setItem('authToken', res.authToken);
        } else if (!values.rememberMe) {
          sessionStorage.setItem('authToken', res.authToken);
        }
      }
      dispatch(showSnackbar({ message: 'Login successful' }));
      return res;
    } catch (error) {
      return dispatch(showSnackbar(handleError(error)));
    }
  }
);

export const logout = createAction('logout', () => {
  localStorage.removeItem('authToken');
  sessionStorage.removeItem('authToken');
  return {
    payload: {
      id: nanoid(),
      createdAt: new Date().toISOString()
    }
  };
});

export const register = createAsyncThunk(
  'register',
  async (values: UserType, { dispatch }) => {
    try {
      await axios.post('/user/register', values);
    } catch (error) {
      return dispatch(showSnackbar(handleError(error)));
    }
  }
);

export const isLogged = createAsyncThunk('isLogged', async <T>() => {
  try {
    const res: { isLogged: boolean; data: T } = (
      await axios.post('/authentication/verify-user')
    ).data;
    return res;
  } catch (error) {
    return error;
  }
});
