import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'Config/Axios';

export const getCountries = createAsyncThunk('getCountries', async () => {
  try {
    const res = (await axios.get('/public/countries')).data;
    return res;
  } catch (error) {
    return error;
  }
});
export const getCities = createAsyncThunk(
  'getCities',
  async (location: string) => {
    try {
      const res = (
        await axios.get(`/public/auto-complete-locations`, {
          params: { country: location || 'PT' }
        })
      ).data;

      return res;
    } catch (error) {
      return error;
    }
  }
);
