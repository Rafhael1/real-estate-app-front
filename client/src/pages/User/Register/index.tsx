import React from "react"
import { Form, Field, reduxForm } from "redux-form"

import { useDispatch } from "react-redux"

import { createUser } from "../../../redux/actions/Auth"

const Register = ({ handleSubmit }: any): JSX.Element => {

	const dispatch = useDispatch()

	return (
		<Form onSubmit={handleSubmit((e: any) => dispatch(createUser(e)))}>
			<Field name="name" component="input" type="text" />
			<Field name="email" component="input" type="email" />
			<Field name="password" component="input" type="password" />
			<Field name="submit" component="button" type="submit">
				Submit
			</Field>
		</Form>
	)
}

export default reduxForm({
	form: "RegisterForm"
})(Register)