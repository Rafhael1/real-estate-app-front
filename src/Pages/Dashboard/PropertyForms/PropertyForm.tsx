import React, { useEffect } from 'react';
import { AutocompleteField, TextField, SelectField } from 'Components';
import { Container, Grid, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';
import { getCountries } from 'Services/Search/Search.action';
import maskMoney from 'Utils/masks/maskMoney';

const PropertyForm = ({ control }) => {
	const dispatch = useDispatch();
	const { countries } = useSelector((state) => state.Search);

	useEffect(() => {
		if (!countries?.length) {
			dispatch(getCountries());
		}
	}, []);

	return (
		<Container>
			<Grid container spacing={1}>
				<Grid item xs>
					<TextField
						name="title"
						placeholder="Beach house by the black sea"
						label={'Post title'}
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						name="description"
						placeholder="Description"
						label="Description"
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						required
						name="squareMeter"
						label="Square meters"
						placeholder="55"
						type="number"
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						required
						name="bathrooms"
						placeholder="3"
						type="number"
						label="Bathrooms"
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						required
						name="bedrooms"
						placeholder="4"
						type="number"
						label="Bedrooms"
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						name="address"
						placeholder="Address"
						label="Address"
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<AutocompleteField
						required
						keySelect="_id"
						name="country"
						label="Country"
						labelSelect="name"
						disableClearable
						options={countries}
						control={control}
						sx={undefined}
					/>
				</Grid>
				<Grid item xs>
					<TextField
						name="price"
						placeholder="Price"
						label="Price"
						transform={{
							input: (value: string) => maskMoney(value),
							output: (e: React.ChangeEvent<HTMLInputElement>) =>
								maskMoney(e.target.value)
						}}
						control={control}
					/>
				</Grid>
				<Grid item xs>
					<SelectField
						name="status"
						label="Status"
						control={control}
						defaultValue={'For Sale'}
					>
						<MenuItem value="For Sale">For Sale</MenuItem>
						<MenuItem value="For Rent">For Rent</MenuItem>
					</SelectField>
				</Grid>
			</Grid>
		</Container>
	);
};

export default PropertyForm;
