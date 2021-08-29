import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import "./index.css"
import { ThemeProvider } from "@material-ui/core"
import theme from "./design/colors"

import { Provider } from "react-redux"
import { store } from "./redux/store"

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
)
