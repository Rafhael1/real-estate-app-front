import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../Config/axios';

import { UserType } from './login.types';

export const login: any = createAsyncThunk(
  'login',
  async (values: UserType) => {
    try {
      const res = (await axios.post('/authentication/login', values)).records;
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
