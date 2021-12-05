import React from 'react'
// import { useSelector } from 'react-redux'
import { InavbarProps } from './NavBarTypes'
// import useStyles from './styles'

// Unique navbar style

const Navbar = ({ homePage, dashboard }: InavbarProps) => (
  <>{homePage && dashboard}</>
)

export default Navbar

Navbar.defaultProps = {
  homePage: true,
  dashboard: false
}
