import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Routes from "./router"

import { useSelector, useDispatch } from "react-redux"

import { RootStore } from "./redux/store"

import { isLogged } from "./redux/actions/Auth"

const App = () => {

	const dispatch = useDispatch()

	const States = useSelector((state : RootStore) => state.RealEstates )

	const handleRequest = () => {
		dispatch(isLogged())
		
	}

	useEffect(() => {
		handleRequest()
	}, [])

	return (
		<div>
			<Router>
				<Routes />
			</Router>
		</div>
	)
}

export default App
