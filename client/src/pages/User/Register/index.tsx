import React from "react"
import { Form, Field, reduxForm } from "redux-form"

import { useDispatch } from "react-redux"

import renderTextField from "../../../components/fields/inputField"
import { Button } from "@material-ui/core"

import { createUser } from "../../../redux/actions/Auth"

const Register = ({ handleSubmit }: any): JSX.Element => {

	const dispatch = useDispatch()

	return (
		<Form onSubmit={handleSubmit((values: any) => dispatch(createUser(values)))}>
			<Field 
				name="name" 
				variant="outlined"
				color="primary"
				label="Name"
				type="text" 
				component={renderTextField} 
			/>
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
			<Field 
				component={Button} 
				type="submit" 
				props={{
					variant: "contained",
					color: "primary"
				}}
			>Sign Up</Field>
		</Form>
	)
}

export default reduxForm({
	form: "RegisterForm"
})(Register)