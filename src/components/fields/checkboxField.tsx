/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'


const renderCheckboxField = ({
	input,
	label,
	color,
	icon,
	size,
	meta: { touched, error },
	...custom
}) => (
	<FormControlLabel
		label={label}
		control={
			<Checkbox
				icon={icon} 
				color={color}
				size={size}
				{...input}
				{...custom}
				errorText={touched && error}
			/>
		}
	/>
)

export default renderCheckboxField