import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../Types/Dashboard/Dashboard.types';
import {
	getRealEstates,
	addNewRealEstate,
	deleteRealEstate
} from './Dashboard.actions';

export const initialState: IState = {
	isLoading: false,
	hasError: false,
	noData: false,
	realEstates: [],
	selectedPost: {}
};

const dashboardSlices = createSlice({
	name: 'dashboard',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getRealEstates.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getRealEstates.fulfilled, (state, action) => {
			state.isLoading = false;
			state.realEstates = action.payload;
			state.noData = action.payload?.length === 0;
		});
		builder.addCase(getRealEstates.rejected, (state) => {
			state.isLoading = false;
			state.hasError = true;
		});
		// Add new real estate
		builder.addCase(addNewRealEstate.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(addNewRealEstate.fulfilled, (state) => {
			state.isLoading = false;
		});
		builder.addCase(addNewRealEstate.rejected, (state) => {
			state.isLoading = false;
			state.hasError = true;
		});
		// Delete real estate
		builder.addCase(deleteRealEstate.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteRealEstate.fulfilled, (state, action) => {
			state.isLoading = false;
			state.realEstates = current(state.realEstates).filter(
				(el) => el._id !== action.payload
			);
			state.noData = () => {
				if (current(state.realEstates)?.length === 0) {
					return true;
				}
			};
		});
		builder.addCase(deleteRealEstate.rejected, (state) => {
			state.isLoading = false;
			state.hasError = true;
		});
	},
	reducers: {
		selectPost: (state: IState, action: PayloadAction<string>) => {
			state.selectedPost = current(state.realEstates).find(
				(el) => el._id === action.payload
			);
		},
		clearSelectedPost: (state: IState) => {
			state.selectedPost = {};
		}
	}
});

export const { selectPost, clearSelectedPost } = dashboardSlices.actions;

export default dashboardSlices.reducer;
