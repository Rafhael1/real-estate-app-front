import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import "./index.css"
import { ThemeProvider } from '@mui/material/styles'
import theme from './design/globalStyles'
import CssBaseline from '@mui/material/CssBaseline'


import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
