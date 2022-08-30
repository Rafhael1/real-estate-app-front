import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Snackbar from 'Components/Snackbar/Snackbar';
import LoadingSuspense from 'Components/Layout/LoadingSuspense/LoadingSuspense';

const Navbar = React.lazy(() => import('Components/Layout/Navbar/Navbar'));
const Footer = React.lazy(() => import('Components/Layout/Footer/Footer'));
const Routes = React.lazy(() => import('Pages/Router'));

const App = () => {
	return (
		<Suspense fallback={<LoadingSuspense />}>
			<Router>
				<Snackbar />
				<Navbar />
				<Routes />
				<Footer />
			</Router>
		</Suspense>
	);
};

export default App;
