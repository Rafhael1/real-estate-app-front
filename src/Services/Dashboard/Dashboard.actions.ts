import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'Config/Axios';
import { showSnackbar } from 'Services/Snackbar/Snackbar.slices';
import handleError from 'Utils/handleError';
import { IrealEstates } from '../../Types/Dashboard/Dashboard.types';

export const getRealEstates: any = createAsyncThunk(
  'getRealEstates',
  async () => {
    try {
      const res = (await axios.get('dashboard/all-user-posts')).data;
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const addNewRealEstate = createAsyncThunk(
  'addNewRealEstate',
  async (values: IrealEstates, { dispatch }) => {
    try {
      await axios.post('dashboard/create-real-estate', values, {});
      return dispatch(showSnackbar({ message: 'Post created!' }));
    } catch (error) {
      return dispatch(showSnackbar(handleError(error)));
    }
  }
);
