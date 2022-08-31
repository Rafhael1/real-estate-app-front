import React, { useEffect, Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';
import { isLogged } from 'Services/Auth/Auth.actions';
import { IState } from 'Types/Auth/Auth.types';
import LoadingSuspense from 'Components/Layout/LoadingSuspense/LoadingSuspense';
// Pages
const Home = React.lazy(() => import('./Home/Home'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
const Results = React.lazy(() => import('./Results/Results'));
const PostDetails = React.lazy(() => import('./PostDetails/PostDetails'));

interface Iselector {
	Auth: IState;
}

const MainRouter = () => {
	const dispatch = useDispatch();
	const Auth = useSelector((state: Iselector) => state.Auth);

	useEffect(() => {
		if (localStorage.authToken?.length || sessionStorage.authToken?.length) {
			dispatch(isLogged());
		}
	}, []);

	return (
		<Suspense fallback={<LoadingSuspense />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Results />} />
				<Route path="/search/:id" element={<PostDetails />} />
				<Route
					path="/dashboard"
					element={!Auth?.isAuthenticated ? <Navigate to="/" /> : <Dashboard />}
				/>
				{/* The not found(404) page has to be the last one */}
				<Route path="*" element={<div>Not found</div>} />
			</Routes>
		</Suspense>
	);
};

export default MainRouter;
