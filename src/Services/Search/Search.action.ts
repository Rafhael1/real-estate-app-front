import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { showSnackbar } from 'Services/Snackbar/Snackbar.slices';
import handleError from 'Utils/handleError';
import axios from 'Config/Axios';
import { IFormValues } from 'Types/Search/Search.types';

export const getCountries = createAsyncThunk('getCountries', async (values) => {
  try {
    const res = (await axios.get('/public/countries')).data;
    return res;
  } catch (error) {
    return error;
  }
});
