export const palette = {
	background: {
		default: '#F2F2F2'
	},
	primary: {
		light: '#d4e0ff',
		main: '#2F3A56',
		dark: '#1c2233'
	},
	secondary: {
		light: '#ffd500',
		main: '#fcb103',
		dark: '#f9a000',
		contrastText: 'whitesmoke'
	},
	success: {
		light: '#76ED82',
		main: '#00e676',
		contrastText: 'whitesmoke'
	},
	info: {
		light: '#d6f3ff',
		main: '#64D0FF',
		contrastText: 'whitesmoke'
	},
	error: {
		main: '#F96666',
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
		light: '#ffffff',
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
