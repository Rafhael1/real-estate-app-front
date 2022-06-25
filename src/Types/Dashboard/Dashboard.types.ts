export interface IState {
  isLoading: boolean;
  hasError: boolean;
  realEstates?: IrealEstates[];
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
  country?: string;
  price?: string;
  status?: string;
  images?: string[] | any;
}
