import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from '../Redux/globalActions/actions';
import { IglobalReducersForSelectors } from '../Redux/types';

// Pages
import Home from './Home/home';
import Login from './Auth/Login/login';
import Register from './Auth/Register/register';
import Dashboard from './User/dashboard/dashboard';

const Router = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: IglobalReducersForSelectors) => state.globalReducer.isAuthenticated
  );

  useEffect(() => {
    dispatch(isLogged());
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/login"
        exact
        render={() =>
          isAuthenticated !== true ? <Login /> : <Redirect to="/dashboard" />
        }
      />
      <Route path="/register" exact component={Register} />
      <Route
        path="/dashboard"
        exact
        render={() =>
          isAuthenticated ? <Dashboard /> : <Redirect to="/login" />
        }
      />
      <Route path="/results" exact />
    </Switch>
  );
};

export default Router;
