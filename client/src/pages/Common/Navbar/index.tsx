import  React, { useEffect } from "react"

import { useSelector } from "react-redux"

import { RootStore } from "../../../redux/store"

const Navbar = (): JSX.Element => {
	
	const realEstates = useSelector((state : RootStore) => state.RealEstates )

	useEffect(() => {
		console.log(realEstates)
	}, [])

	return (
		<div>
			<h1>Hello World</h1>
			<h1></h1>
		</div>
	)
}

export default Navbar
