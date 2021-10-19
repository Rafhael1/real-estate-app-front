import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './Home'
import Login from './User/Auth/Login'
import Register from './User/Auth/Register'
import Dashboard from './User/Dashboard'

const Router = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login}  />
			<Route path="/register" exact component={Register} />
			<Route path="/dashboard" exact component={Dashboard} />
			<Route path="/results" exact />
		</Switch>
	)
}

export default Router