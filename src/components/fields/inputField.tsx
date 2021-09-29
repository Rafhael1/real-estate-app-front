/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { TextField } from '@mui/material'


const renderTextField = ({
	input,
	label,
	variant,
	type,
	required,
	width,
	meta: { touched, error },
	...custom
}) => (
	<TextField
		required={required}
		label={label}
		variant={variant}
		type={type}
		style={{
			width
		}}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
)

renderTextField.defaultProps = {
	width: '300px'
}

export default renderTextField