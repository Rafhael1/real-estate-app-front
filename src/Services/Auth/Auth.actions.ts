import { createAsyncThunk, createAction, nanoid } from '@reduxjs/toolkit';
import axios from 'Config/Axios';
import axiosDefault from 'axios';
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
  localStorage.clear();
  sessionStorage.clear();

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
      await axios.post('/authentication/register', values);
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

export const getUserLocation = createAsyncThunk('getUserLocation', async () => {
  const userIp = localStorage.getItem('userIP');
  if (userIp !== null) {
    return {
      city: localStorage.getItem('city'),
      country: localStorage.getItem('country')
    };
  } else if (userIp === null) {
    try {
      const res = (
        await axiosDefault.get(
          `https://ipinfo.io/json?token=${process.env.REACT_APP_IPINFO_TOKEN}`
        )
      ).data;

      const { ip, city, country } = res;

      localStorage.setItem('userIP', ip);
      localStorage.setItem('userCity', city);
      localStorage.setItem('userCountry', country);

      return { city, country };
    } catch (error) {
      return error;
    }
  }
});
