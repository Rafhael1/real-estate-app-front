import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const AutocompleteField = ({
	options = [],
	name,
	labelSelect,
	keySelect,
	label,
	control,
	sx,
	...rest
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={(props) => (
				<Autocomplete
					{...props.field}
					{...rest}
					key={name}
					options={options.length ? options : []}
					autoComplete
					isOptionEqualToValue={(option, value) =>
						option[keySelect] === value[keySelect]
					}
					getOptionLabel={(option) => (option ? option[labelSelect] : '')}
					renderOption={(props, option) => {
						return (
							<li {...props} key={option[keySelect]}>
								{option[labelSelect]}
							</li>
						);
					}}
					renderInput={(params) => (
						<TextField key={name} sx={sx} {...params} label={label} />
					)}
					onChange={(_, values) => props.field.onChange(values)}
				/>
			)}
		/>
	);
};

export default AutocompleteField;
