import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Admin from "./components/screens/Admin/Admin"

import Menu from "./components/UI/Navbar/Navbar"


import { useSelector, useDispatch } from "react-redux"

import { RootStore } from "./redux/store"

import { getRealEstates } from "./redux/actions/RealEstates"

const App = () => {

	const dispatch = useDispatch()

	const States = useSelector((state : RootStore) => state.RealEstates )

	const handleRequest = () => {
		dispatch(getRealEstates())
		
	}

	useEffect(() => {
		handleRequest()
	}, [])

	States.realEstates? console.log(States) : null

	return (
		<div>
			{
		
				States.realEstates?.map((data: any) => (
					<div key={data.description}>{data.country}- {data.title}
						<img src={`http://localhost:8000/${data.images}`} style={{width: "50px", height: "50px"}} />
					</div>
				))
			}
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
