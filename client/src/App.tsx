import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Admin from "./components/screens/Admin/Admin"

import Menu from "./components/UI/Navbar/Navbar"

const App = () => {

	return (
		<div>
			<Router>
				<>
					<Switch>
						<Route exact path="/" render={()  => <Menu />  } ></Route>
						<Route exact path="/results" ></Route>
						<Route exact path="/admin" render={()  => <Admin />  } ></Route>
						<Route path="/results/:id" ></Route>
					</Switch>      
				</>
			</Router>
		</div>
	)
}

export default App
