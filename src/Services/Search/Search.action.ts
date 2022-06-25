import { ICountries, IFormValues } from './../../Types/Search/Search.types';
import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'Config/Axios';

export const getSearchResults = createAsyncThunk(
  'getSearchResults',
  async (data: IFormValues) => {
    try {
      const res: IrealEstates[] = (
        await axios.get('/public/search-properties', {
          params: { ...data }
        })
      ).data;

      return res;
    } catch (error) {
      return error;
    }
  }
);

export const getCountries = createAsyncThunk('getCountries', async () => {
  try {
    const res: ICountries = (await axios.get('/public/countries')).data;
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
