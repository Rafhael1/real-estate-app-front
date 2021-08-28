import React, { EventHandler } from "react"

import { Form, Field, reduxForm } from "redux-form"

import { useDispatch } from "react-redux"
import { login } from "../../../redux/actions/Auth"

const Login = ({ handleSubmit }: any) => {

	const dispatch = useDispatch()

	return (
		<Form onSubmit={handleSubmit((e: undefined) => dispatch(login(e)))} >
			<Field name="email" component="input" type="text" />
			<Field name="password" component="input" type="password" />
			<Field name="rememberMe" component="input" type="checkbox" />
			<Field name="submit" component="button" type="submit">
				Submit
			</Field>
		</Form>
	)
}

export default reduxForm({
	form: "LoginForm"
})(Login)