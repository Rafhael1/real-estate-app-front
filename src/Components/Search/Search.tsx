import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserType } from 'Types/Auth/Auth.types';
import { useForm } from 'react-hook-form';

import { AutocompleteField, CheckboxField, TextField } from 'Components';
import {
	Accordion,
	AccordionSummary,
	Box,
	Menu,
	MenuItem,
	Typography,
	ButtonGroup
} from '@mui/material';
import { CustomButton as Button } from './Search.styles';
import { KeyboardArrowDown, SearchRounded } from '@mui/icons-material';

import useMediaQuery from 'Utils/Hooks/useMediaQuery';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';
import { getUserLocation } from 'Services/Auth/Auth.actions';
import {
	getCountries,
	getCities,
	getSearchResults
} from 'Services/Search/Search.action';
import maskMoney from 'Utils/masks/maskMoney';

const SearchComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const countries = useSelector((state) => state.Search.countries);
	const cities = useSelector((state) => state.Search.cities);
	const user: UserType = useSelector((state) => state.Auth.user);

	const { isTabletOrMobile } = useMediaQuery();
	const [searchType, setSearchType] = useState('buy');

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

	const { handleSubmit, control, watch, setValue } = useForm({
		defaultValues: {
			country: { name: '', cod: '' },
			city: { city: '', country: '' },
			apartment: true,
			house: true,
			terrain: true
		}
	});
	const watchCountry = watch('country');

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (event.currentTarget.id === 'looking-for-menu-button') {
			return setAnchorEl(event.currentTarget);
		} else if (event.currentTarget.id === 'price-button') {
			return setAnchorEl2(event.currentTarget);
		} else {
			return;
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
		setAnchorEl2(null);
	};

	const handleSearchTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSearchType(e.currentTarget.id);
	};

	const checkSearchType = useMemo(() => {
		return searchType === 'buy' ? true : false;
	}, [searchType]);

	useEffect(() => {
		const country =
			countries.length &&
			countries.find((country) => country.cod === user.country);
		if (country?.cod || watchCountry?.cod) {
			dispatch(getCities(watchCountry?.cod || country?.cod));
		}
	}, [watchCountry.cod, user.country]);

	useEffect(() => {
		if (!countries.length) {
			dispatch(getCountries());
			dispatch(getUserLocation());
		}
	}, []);

	useEffect(() => {
		if (countries.length) {
			const countryName = countries?.find((i) => i.cod === user.country);
			setValue('country', {
				name: countryName?.name || '',
				cod: countryName?.cod || ''
			});
		}
	}, [user.country, countries]);
	useEffect(() => {
		const userCity = cities.length && cities.find((i) => i.city === user.city);
		if (userCity) {
			setValue('city', {
				city: userCity?.city,
				country: watchCountry.cod || userCity?.country
			});
		}
	}, [user.city, cities]);

	const handleOnSubmit = handleSubmit((data) => {
		navigate(
			`/search?postType=${searchType}&country=${data.country.cod}&city=${data.city.city}&apartment=${data.apartment}&house=${data.house}&terrain=${data.terrain}`
		);
		return dispatch(
			getSearchResults({
				...data,
				searchType,
				country: data.country.cod,
				city: data.city.city
			})
		);
	});

	return (
		<form onSubmit={handleOnSubmit}>
			<ButtonGroup
				sx={{ backgroundColor: 'white' }}
				orientation={isTabletOrMobile ? 'vertical' : 'horizontal'}
				variant="text"
				aria-label="text button group"
			>
				<Button
					id="buy"
					onClick={handleSearchTypeChange}
					buttonbackground={checkSearchType}
				>
					Buy
				</Button>
				<Button
					id="rent"
					onClick={handleSearchTypeChange}
					buttonbackground={!checkSearchType}
				>
					Rent
				</Button>
				<Button
					id="looking-for-menu-button"
					aria-controls="looking-for-menu-button"
					aria-haspopup="true"
					onClick={handleClick}
					aria-label="open-looking-for-menu"
					endIcon={<KeyboardArrowDown />}
				>
					Looking for
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem>
						<CheckboxField
							name="apartment"
							disabled
							type="checkbox"
							label="Apartments"
							control={control}
						/>
					</MenuItem>
					<MenuItem>
						<CheckboxField
							name="house"
							type="checkbox"
							disabled
							label="Houses"
							control={control}
						/>
					</MenuItem>
					<MenuItem>
						<CheckboxField
							name="terrain"
							type="checkbox"
							disabled
							label="Terrains"
							control={control}
						/>
					</MenuItem>
				</Menu>
				<Button
					id="price-button"
					aria-label="open-price-menu"
					aria-controls={'price-menu'}
					aria-haspopup="true"
					onClick={handleClick}
					endIcon={<KeyboardArrowDown />}
				>
					Price Range
				</Button>
				<Menu
					id="price-menu"
					anchorEl={anchorEl2}
					open={Boolean(anchorEl2)}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'price-input'
					}}
				>
					<MenuItem
						dense
						divider
						sx={{
							width: '300px',
							textAlign: 'center',
							marginTop: '5px',
							padding: '20px 20px 20px 20px',
							zIndex: '111'
						}}
					>
						<TextField
							transform={{
								input: (value: string) => maskMoney(value),
								output: (e: React.ChangeEvent<HTMLInputElement>) =>
									maskMoney(e.target.value)
							}}
							name="minPrice"
							color="primary"
							label="Min. Price"
							control={control}
						/>
					</MenuItem>
					<MenuItem
						dense
						sx={{
							width: '300px',
							textAlign: 'center',
							marginBottom: '-5px',
							padding: '20px 20px 20px 20px'
						}}
					>
						<TextField
							transform={{
								input: (value: any) => maskMoney(value),
								output: (e: { target: { value: any } }) =>
									maskMoney(e.target.value)
							}}
							name="maxPrice"
							color="primary"
							label="Max. Price"
							control={control}
						/>
					</MenuItem>
				</Menu>
				<AutocompleteField
					keySelect="_id"
					name="city"
					label="City"
					labelSelect="city"
					options={cities}
					// disabled={!watchCountry.cod}
					disabled
					control={control}
					sx={{ width: isTabletOrMobile ? null : '230px' }}
				/>
				<AutocompleteField
					required
					keySelect="_id"
					name="country"
					label="Country"
					labelSelect="name"
					disableClearable
					options={countries}
					control={control}
					sx={{ width: isTabletOrMobile ? null : '130px' }}
				/>
				<Button
					buttonbackground
					type="submit"
					color="inherit"
					startIcon={<SearchRounded />}
				>
					Search
				</Button>
			</ButtonGroup>
		</form>
	);
};

const SearchMainContainer = () => {
	const { isMobile } = useMediaQuery();

	return (
		<>
			{isMobile ? (
				<Box sx={{ width: '310px', margin: '0 auto' }}>
					<Accordion elevation={2}>
						<AccordionSummary
							expandIcon={<SearchRounded />}
							aria-controls="search-bar"
						>
							<Typography variant="h6">Search</Typography>
						</AccordionSummary>
						<>
							<SearchComponent />
						</>
					</Accordion>
				</Box>
			) : (
				<SearchComponent />
			)}
		</>
	);
};

export default SearchMainContainer;
