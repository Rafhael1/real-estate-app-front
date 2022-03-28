import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from 'Services/Auth/Auth.actions';
import { IState } from 'Types/Auth/Auth.types';
// Pages
import Home from './Home/Home';
import Login from '../Components/Auth/Login/Login';
import Register from '../Components/Auth/Register/Register';
import Dashboard from './User/Dashboard/Dashboard';

interface Iselector {
  Auth: IState;
}

const Router = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: Iselector) => state.Auth.isAuthenticated
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
