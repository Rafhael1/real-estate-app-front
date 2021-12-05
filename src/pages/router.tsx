/** @format */

import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { isLogged } from '../redux/GlobalActions/actions'
import { IglobalReducers } from '../redux/types'

// Pages
import Home from './Home'
import Login from './Common/Auth/Login'
import Register from './Common/Auth/Register'
import Dashboard from './User/Dashboard'

const Router = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: IglobalReducers) => state.isAuthenticated
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
          !isAuthenticated ? <Login /> : <Redirect to="/dashboard" />
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
