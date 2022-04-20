import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from 'Services/Auth/Auth.actions';
import { IState } from 'Types/Auth/Auth.types';
// Pages
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

interface Iselector {
  Auth: IState;
}

const Router = () => {
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
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/dashboard"
        exact
        render={() => (isAuthenticated ? <Dashboard /> : <Redirect to="/" />)}
      />
      <Route path="/results" exact />
      {/* The not found(404) page has to be the last one */}
      <Route render={() => <div>Porn is bad dawg...</div>} />
    </Switch>
  );
};

export default Router;
