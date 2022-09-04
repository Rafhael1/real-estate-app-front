import { IrealEstates } from 'Types/Dashboard/Dashboard.types';

export interface IFormValues {
	countries?: ICountries;
	_id?: string;
	searchType: string;
	city?: string;
	country: string;
	minPrice?: number | string;
	maxPrice?: number | string;
	page?: number;
}

export interface ICountries {
	_id?: string;
	name?: string;
	cod?: string;
}

export interface ISearchSlices {
	hasResults: boolean;
	hasRequested: boolean;
	isLoading: boolean;
	hasError: boolean;
	form: IFormValues;
	posts: IrealEstates[];
	trendingPosts: IrealEstates[];
	post: IrealEstates;
	countries?: ICountries[];
	pagination?: {
		totalResults: number;
		totalPages: number;
		pageSize: number;
	};
	cities?: {
		_id?: string;
		country?: string;
		city?: string;
	}[];
}
