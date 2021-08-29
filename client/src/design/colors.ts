/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createTheme } from "@material-ui/core"
import { enUS } from "@material-ui/core/locale"

interface ITheme {
    primary: {
        main: string
    },
    secondary: {
        main: string
    },
    text: {
        primary: string,
        secondary: string,
    },   
}

const palette: ITheme = {
	primary: {
		main: "#1B263B"
	},
	secondary: {
		main: "#415A77"
	},
	text: {
		primary: "#0D1B2A",
		secondary: "#A1BDCF",
	},
}

const theme  = createTheme({ 
	palette,
	typography: {
		fontFamily: "Quicksand",
	},
	overrides: {
		MuiButton: {
			root: {
				fontSize: "1rem",
				borderRadius: "5px",
			},
		},
		MuiTextField: {
			root: {
				margin: "5px",
				display: "flex",
				width: "300px"
			}
		}
	},
}, enUS)

export default theme