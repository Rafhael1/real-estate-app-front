export interface IState {
	isLoading: boolean;
	hasError: boolean;
	noData: any | boolean;
	realEstates?: IrealEstates[];
	selectedPost?: IrealEstates;
}

export interface IrealEstates {
	_id?: string;
	title?: string;
	description?: string;
	bathrooms?: number;
	bedrooms?: number;
	squareMeter?: number;
	address?: string;
	city?: string;
	country?: string | any;
	price?: string;
	status?: string;
	images?: string[] | any;
}
