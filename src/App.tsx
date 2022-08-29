import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Pages/Router';
import Snackbar from 'Components/Snackbar/Snackbar';
import { Footer, Navbar } from 'Components';

const App = () => {
	return (
		<>
			<Router>
				<Snackbar />
				<Navbar />
				<Routes />
				<Footer />
			</Router>
		</>
	);
};

export default App;
