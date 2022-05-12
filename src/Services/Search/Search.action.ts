import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'Config/Axios';
import { showSnackbar } from 'Services/Snackbar/Snackbar.slices';
import handleError from 'Utils/handleError';

export const getCountries = createAsyncThunk('getCountries', async (values) => {
  try {
    const res = (await axios.get('/countries')).data;
  } catch (error) {
    return error;
  }
});
