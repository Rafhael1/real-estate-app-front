import React, {  useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Routes from "./pages/router"

import { useSelector, useDispatch } from "react-redux"

import { RootStore } from "./redux/store"

import { isLogged } from "./redux/actions/Auth"
// import styles from "./design/globalStyles"

const App = (): JSX.Element => {

	const dispatch = useDispatch()

	const States = useSelector((state : RootStore) => state.RealEstates )
	console.log(States)

	const handleRequest = () => {
		dispatch(isLogged())
		
	}

	// const style = styles()

	useEffect(() => {
		handleRequest()
	}, [])

	return (
		<>	
			<Router>
				<Routes />
			</Router>
		</>
	)
}

export default App
