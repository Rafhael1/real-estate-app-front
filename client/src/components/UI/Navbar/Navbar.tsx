import  React, { useEffect } from "react"


//import { ACTIONS } from "../../../redux/actions/RealEstates"

import { useSelector } from "react-redux"

import { RootStore } from "../../../redux/store"

const Navbar = () => {
	
	const realEstates = useSelector((state : RootStore) => state.RealEstates )

	useEffect(() => {
		console.log("s")
	}, [])

	return (
		<div>
			<h1>Hello World</h1>
			<h1></h1>
		</div>
	)
}

export default Navbar
