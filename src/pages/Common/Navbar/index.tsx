/* eslint-disable @typescript-eslint/no-unused-vars */
import  React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import useStyles from './styles'

const AuthNavBar = () => {
  const classes = useStyles()
  return (
    <nav style={classes.authNavBar}>
			Test
    </nav>
  )
}

// Unique navbar style

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
