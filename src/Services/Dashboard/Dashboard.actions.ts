import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'Utils/requestConfig/AxiosConfig';
import { showSnackbar } from 'Services/Snackbar/Snackbar.slices';
import handleError from 'Utils/handleError';
import { IrealEstates } from '../../Types/Dashboard/Dashboard.types';

export const getRealEstates: any = createAsyncThunk(
	'getRealEstates',
	async () => {
		try {
			const res = (await axios.get('dashboard/all-user-posts')).data;
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
			values = {
				...values,
				// @ts-ignore
				country: values.country.cod
			};
			await axios.post('dashboard/create-real-estate', values, {});
			return dispatch(showSnackbar({ message: 'Post created!' }));
		} catch (error) {
			return dispatch(showSnackbar(handleError(error)));
		}
	}
);

export const editRealEstate = createAsyncThunk(
	'editRealEstate',
	async (data: { postId: string; body: IrealEstates }, { dispatch }) => {
		try {
			data.body = {
				...data.body,
				country: data.body.country.cod
			};
			await axios.put(`dashboard/edit-user-post/${data.postId}`, data.body);
			return dispatch(showSnackbar({ message: 'Post edited!' }));
		} catch (error) {
			return dispatch(showSnackbar(handleError(error)));
		}
	}
);

export const deleteRealEstate = createAsyncThunk(
	'deleteRealEstate',
	async (id: string, { dispatch }) => {
		try {
			// await axios.delete(`dashboard/delete-user-post/${id}`);

			dispatch(showSnackbar({ message: 'Post deleted!' }));

			return id;
		} catch (error) {
			return dispatch(showSnackbar(handleError(error)));
		}
	}
);
