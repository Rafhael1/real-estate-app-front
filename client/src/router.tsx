import React from "react"
import { Switch, Route } from "react-router"

import Admin from "./pages/User/Admin"

import Login from "./pages/User/Login"

import Register from "./pages/User/Register"

const Router = () => {
	return (
		<Switch>
			<Route path="/" exact />
			<Route path="/login" exact component={Login}  />
			<Route path="/register" exact component={Register} />
			<Route path="/admin" exact component={Admin} />
			<Route path="/results" exact />
		</Switch>
	)
}

export default Router