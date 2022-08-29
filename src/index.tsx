import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import 'typeface-quicksand';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './Components/Design/GlobalStyles';
import App from './App';
import { store } from 'Utils/Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>
);
