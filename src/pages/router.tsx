import React from 'react'
import { Switch, Route } from 'react-router'

import Dashboard from './User/Dashboard'

import Login from './User/Login'

import Register from './User/Register'

const Router = (): JSX.Element => {
	return (
		<Switch>
			<Route path="/" exact />
			<Route path="/login" exact component={Login}  />
			<Route path="/register" exact component={Register} />
			<Route path="/dashboard" exact component={Dashboard} />
			<Route path="/results" exact />
		</Switch>
	)
}

export default Router