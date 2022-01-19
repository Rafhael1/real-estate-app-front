import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { isLogged } from '../redux/globalActions/actions'
import { IglobalReducersForSelectors } from '../redux/types'

// Pages
import Home from './home/home'
import Login from './common/auth/login/login'
import Register from './common/auth/register/register'
import Dashboard from './user/dashboard/dashboard'

const Router = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: IglobalReducersForSelectors) => state.globalReducer.isAuthenticated
  )

  useEffect(() => {
    dispatch(isLogged())
  }, [])

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
  )
}

export default Router
