import React, { useEffect, Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { isLogged } from 'Services/Auth/Auth.actions';
import { IState } from 'Types/Auth/Auth.types';
// Pages
const Home = React.lazy(() => import('./Home/Home'));
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

interface Iselector {
  Auth: IState;
}

const MainRouter = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: Iselector) => state.Auth.isAuthenticated
  );

  useEffect(() => {
    if (localStorage.authToken?.length || sessionStorage.authToken?.length) {
      dispatch(isLogged());
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        {/* The not found(404) page has to be the last one */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
