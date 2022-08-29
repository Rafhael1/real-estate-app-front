import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import { ICountries } from './../../Types/Search/Search.types';
import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { ISearchSlices } from 'Types/Search/Search.types';
import { getSearchResults, getCountries, getCities } from './Search.action';

const initialState = {
	hasResults: false,
	hasRequested: false,
	isLoading: false,
	hasError: false,
	form: {},
	countries: [],
	cities: [],
	posts: [],
	pagination: {
		totalResults: null,
		totalPages: null
	}
} as ISearchSlices;

const searchSlices = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Search Results
		builder.addCase(getSearchResults.pending, (state, action) => {
			state.isLoading = true;
			state.form = action.meta.arg;
			state.posts = [];
		});
		builder.addCase(
			getSearchResults.fulfilled,
			(state, action: PayloadAction<{ meta: any; data: IrealEstates[] }>) => {
				state.isLoading = false;
				state.hasRequested = true;
				state.hasResults = action.payload.data.length > 0;
				state.posts = action.payload.data;
				state.pagination.totalPages = action.payload.meta.totalPages;
			}
		);
		builder.addCase(getSearchResults.rejected, (state) => {
			state.isLoading = false;
			state.hasError = true;
		});
		// Countries
		builder
			.addCase(getCountries.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				getCountries.fulfilled,
				(state, action: PayloadAction<ICountries[]>) => {
					state.isLoading = false;
					state.countries = action.payload;
				}
			)
			.addCase(getCountries.rejected, (state) => {
				state.isLoading = false;
				state.hasError = true;
			});
		// Cities
		builder
			.addCase(getCities.pending, (state) => {
				state.isLoading = true;
				state.cities = [];
			})
			.addCase(getCities.fulfilled, (state, action) => {
				state.isLoading = false;
				state.cities = action.payload;
			})
			.addCase(getCities.rejected, (state) => {
				state.isLoading = false;
				state.hasError = true;
			});
	}
});

export default searchSlices.reducer;
