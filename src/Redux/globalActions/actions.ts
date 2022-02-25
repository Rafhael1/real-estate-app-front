import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Config/axios';

export const isLogged: any = createAsyncThunk('isLogged', async () => {
  try {
    const res: boolean = (await axios.post('/authentication/verify-user')).data;
    return res;
  } catch (error) {
    return error;
  }
});
