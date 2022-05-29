import React, { useState, useMemo, useEffect } from 'react';
import { ICountries, IFormValues } from 'Types/Search/Search.types';
import { UserType } from 'Types/Auth/Auth.types';
import { useForm } from 'react-hook-form';

import { AutocompleteField, TextField } from 'Components';
import { Menu, MenuItem } from '@mui/material';
import { CustomButton as Button, ButtonGroup } from './Search.styles';
import { KeyboardArrowDown, SearchRounded } from '@mui/icons-material';

import useMediaQuery from 'Hooks/useMediaQuery';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { getUserLocation } from 'Services/Auth/Auth.actions';
import { getCountries } from 'Services/Search/Search.action';
import maskMoney from 'Utils/masks/maskMoney';
import revertMaskMoney from 'Utils/masks/revertMaskMoney';

const Search = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.Search.countries);
  const user: UserType = useSelector((state) => state.Auth.user);

  const { isTabletOrMobile } = useMediaQuery();
  const [searchType, setSearchType] = useState('buy-button');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: useMemo(() => {
      return {
        country: { name: '', cod: '' },
        minprice: searchType === 'buy-button' ? 50000 : 100,
        maxprice: searchType === 'buy-button' ? 450000 : 2000
      };
    }, [setSearchType])
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === 'looking-for-menu-button') {
      return setAnchorEl(event.currentTarget);
    } else if (event.currentTarget.id === 'price-button') {
      return setAnchorEl2(event.currentTarget);
    } else if (event.currentTarget.id === 'property-menu-button') {
      return setAnchorEl3(event.currentTarget);
    } else {
      return;
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  const handleSearchTypeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchType(e.currentTarget.id);
  };

  const checkSearchType = useMemo(() => {
    return searchType === 'buy-button' ? true : false;
  }, [searchType]);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(getUserLocation());
  }, []);

  useEffect(() => {
    const countryName = countries.find((i) => i.cod === user.country);
    if (user.country) {
      setValue('country', {
        name: countryName?.name || '',
        cod: countryName?.cod || ''
      });
    }
  }, [user.country, countries]);

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <ButtonGroup
          orientation={isTabletOrMobile ? 'vertical' : 'horizontal'}
          variant="text"
          aria-label="text button group"
        >
          <Button
            id="buy-button"
            onClick={handleSearchTypeChange}
            buttonbackground={checkSearchType}
          >
            Buy
          </Button>
          <Button
            id="rent-button"
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
            a
          </Menu>
          <Button
            id="price-button"
            aria-controls={open ? 'price-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Price
          </Button>
          <Menu
            id="price-menu"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'price-button'
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
              // onClick={handleClose}
            >
              <TextField
                transform={{
                  input: (value) => maskMoney(value),
                  output: (e) => maskMoney(e.target.value)
                }}
                name="minprice"
                color="primary"
                label="Min. Price"
                startAdornment="€"
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
                  input: (value) => maskMoney(value),
                  output: (e) => maskMoney(e.target.value)
                }}
                name="maxprice"
                color="primary"
                label="Max. Price"
                control={control}
              />
            </MenuItem>
          </Menu>
          <Button
            id="property-menu-button"
            aria-controls={open ? 'property-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Property Type
          </Button>
          <Menu
            id="property-menu"
            sx={{ width: '200px' }}
            anchorEl={anchorEl3}
            open={Boolean(anchorEl3)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'property-menu-button'
            }}
          >
            <MenuItem onClick={handleClose}>4</MenuItem>
          </Menu>
          <AutocompleteField
            name="city"
            label="City"
            labelSelect="name"
            options={countries}
            control={control}
            sx={{ width: isTabletOrMobile ? null : '230px' }}
          />
          <AutocompleteField
            required
            name="country"
            label="Country"
            labelSelect="name"
            options={countries}
            control={control}
            sx={{ width: isTabletOrMobile ? null : '130px' }}
          />
          <Button
            buttonbackground="true"
            type="submit"
            color="inherit"
            startIcon={<SearchRounded />}
          >
            Search
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Search;
