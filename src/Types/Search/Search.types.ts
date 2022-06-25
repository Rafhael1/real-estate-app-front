import { ButtonProps } from '@mui/material';
import { IrealEstates } from 'Types/Dashboard/Dashboard.types';

export interface IButton extends ButtonProps {
  buttonbackground?: boolean | string;
}

export interface IFormValues {
  countries?: ICountries;
  _id?: string;
  searchType: string;
  city?: string;
  country: string;
  minPrice?: number | string;
  maxPrice?: number | string;
}

export interface ICountries {
  _id?: string;
  name?: string;
  cod?: string;
}

export interface ISearchSlices {
  isLoading: boolean;
  hasError: boolean;
  posts: IrealEstates[];
  countries?: ICountries[];
  cities?: {
    _id?: string;
    country?: string;
    city?: string;
  }[];
}
