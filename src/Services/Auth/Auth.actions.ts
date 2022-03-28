import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'Config/Axios';

import { UserType } from 'Types/Auth/Auth.types';

export const login: any = createAsyncThunk(
  'login',
  async (values: UserType) => {
    try {
      const res = (await axios.post('/authentication/login', values)).data;
      if (res.authToken) {
        if (values.rememberMe) {
          localStorage.setItem('authToken', res.authToken);
        } else if (!values.rememberMe) {
          sessionStorage.setItem('authToken', res.authToken);
        }
      }
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const register = createAsyncThunk(
  'register',
  async (values: UserType) => {
    try {
      await axios.post('/user/register', values);
    } catch (error) {
      return error;
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
