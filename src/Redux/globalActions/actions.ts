import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Config/axios';

export const isLogged: any = createAsyncThunk('isLogged', async () => {
  try {
    const res: boolean = (await axios.post('/verify-user')).records;
    return res;
  } catch (error) {
    return error;
  }
});
