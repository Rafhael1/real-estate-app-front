import React from "react"

import { Form, Field, reduxForm } from "redux-form"
import { useDispatch } from "react-redux"

import { login } from "redux/actions/Auth"
import {
	Stack,
	Container,
	Button
} from "@mui/material"
import renderTextField from "../../../components/fields/inputField"
import renderCheckboxField from "../../../components/fields/checkboxField"

import useStyles from "./styles"
  
const Login = ({ handleSubmit }: any) => {

	const dispatch = useDispatch()

	const classes = useStyles()

	return (
		<Container>
			<div className={classes.loginContainer}>
				<Stack>
					<Form onSubmit={handleSubmit((values): any => dispatch(login(values)))} >
						<Field 
							name="email" 
							color="primary"
							label="Email"
							type="email" 
							component={renderTextField} 
						/>
						<Field 
							name="password" 
							color="primary"
							label="Password"
							type="password" 
							component={renderTextField} 
						/>
						<Field 
							name="rememberMe" 
							type="checkbox" 
							label="Remember Me"
							color="secondary"
							component={renderCheckboxField} 
						/>
						<Field 
							component={Button} 
							type="submit" 
						>Sign In</Field>
					</Form>	
				</Stack>
			</div>
		</Container>
	)
}

export default reduxForm({
	form: "LoginForm"
})(Login)