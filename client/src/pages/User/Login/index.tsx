import React from "react"

import { Form, Field, reduxForm } from "redux-form"

import { useDispatch } from "react-redux"
import { login } from "../../../redux/actions/Auth"
import { Button } from "@material-ui/core"
import renderTextField from "../../Common/utils/fields/inputField"
  
const Login = ({ handleSubmit }: any) => {

	const dispatch = useDispatch()

	

	return (
		<Form onSubmit={handleSubmit((values): any => dispatch(login(values)))} >
			<Field 
				name="email" 
				variant="outlined"
				color="primary"
				label="Email"
				type="email" 
				component={renderTextField} 
			/>
			<Field 
				name="password" 
				variant="outlined"
				color="primary"
				label="Password"
				type="password" 
				component={renderTextField} 
			/>
			{/* <Field name="rememberMe" component="input" type="checkbox" /> */}
			<Field 
				component={Button} 
				type="submit" 
				props={{
					variant: "contained",
					color: "primary"
				}}
			>Submit</Field>
		</Form>
	)
}

export default reduxForm({
	form: "LoginForm"
})(Login)