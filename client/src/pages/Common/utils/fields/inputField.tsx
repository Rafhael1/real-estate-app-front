/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react"
import { TextField } from "@material-ui/core"


const renderTextField = ({
	input,
	label,
	variant,
	type,
	required,
	meta: { touched, error },
	...custom
}) => (
	<TextField
		required={required}
		label={label}
		variant={variant}
		type={type}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
)

export default renderTextField