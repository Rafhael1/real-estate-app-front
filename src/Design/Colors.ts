export const palette = {
  primary: {
    light: '#d4e0ff',
    main: '#2F3A56',
    dark: '#1c2233'
  },
  secondary: {
    light: '#EEE1C6',
    main: '#D3BC8D',
    dark: '#c2ad82',
    contrastText: 'whitesmoke'
  },
  warning: {
    light: '#ffeb3b',
    main: '#fcb103',
    dark: '#f9a000',
    contrastText: 'whitesmoke'
  },
  neutral: {
    light: '#e6e9ed',
    main: '#979aa2',
    dark: '#6d6f7c'
  },
  text: {
    primary: '#060c12',
    secondary: '#898989'
  }
};

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}
