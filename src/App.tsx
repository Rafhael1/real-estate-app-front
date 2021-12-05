/** @format */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './pages/router'

const App = () => (
  <>
    <Router>
      <Routes />
      <h1>Home</h1>
    </Router>
  </>
)

export default App
