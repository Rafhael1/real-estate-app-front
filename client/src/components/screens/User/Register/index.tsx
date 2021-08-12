import React, { useState } from "react"
import { Form, Field, reduxForm } from "redux-form"

import axios from "../../../../utils/api/axios"

import { useSelector, useDispatch } from "react-redux"

import { createUser } from "../../../../redux/actions/Auth"

const Register = ({ handleSubmit }: any) => {

	const dispatch = useDispatch()

	// const handleSubmit = (e: any, values: any) => {
	// 	e.preventDefault()
	// 	dispatch(createUser(values))
	// }

	return (
		<Form onSubmit={handleSubmit((e: any) => dispatch(createUser(e)))}>
			<Field name="name" component="input" type="text" />
			<Field name="email" component="input" type="email" />
			<Field name="password" component="input" type="password" />
			<button type="submit" >Send</button>
		</Form>
	)
}

export default reduxForm({
	form: "RegisterForm"
})(Register)