import  React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../../redux/store'

import useStyles from './styles'

const AuthNavBar = () => {
	const classes = useStyles()
	return (
		<nav style={classes.authNavBar}>
			Test
		</nav>
	)
}

const Navbar = (
	authPage,
	homePage,
	Dashboard,
) => {
	
	return (
		<>
			{
				authPage ? <AuthNavBar /> : null
			}
		</>
	)
}

export default Navbar
