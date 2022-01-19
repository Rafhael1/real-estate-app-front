import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { Provider } from 'react-redux'
import theme from './design/globalStyles'
import App from './app'
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
