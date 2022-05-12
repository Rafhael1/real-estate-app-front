import { Palette } from '@mui/material';
type Extended = {
  primary: any;
  secondary: any;
  text: any;
  yellow: {
    main: string;
    light: string;
    dark: string;
  };
};
export const palette: Extended = {
  primary: {
    light: '#d4e0ff',
    main: '#2F3A56',
    dark: '#1c2233'
  },
  yellow: {
    light: '#ffeb3b',
    main: '#fcb103',
    dark: '#f9a000'
  },
  secondary: {
    light: '#ffeb3b',
    main: '#fcb103',
    dark: '#f9a000'
  },
  text: {
    primary: '#0D1B2A',
    secondary: '#898989'
  }
};
