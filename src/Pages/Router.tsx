import React, { useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { isLogged } from 'Services/Auth/Auth.actions';
import { IState } from 'Types/Auth/Auth.types';
// Pages
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

interface Iselector {
  Auth: IState;
}

const MainRouter = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: Iselector) => state.Auth.isAuthenticated
  );

  useEffect(() => {
    if (localStorage.length || sessionStorage.length) {
      dispatch(isLogged());
    }
  }, []);

  return (
    <Routes location={''}>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
      />
      {/* The not found(404) page has to be the last one */}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default MainRouter;
