import React, { useState, useMemo, useEffect } from 'react';
import { IFormValues } from 'Types/Search/Search.types';
import { UserType } from 'Types/Auth/Auth.types';
import { useForm } from 'react-hook-form';

import { AutocompleteField } from 'Components';
import { Menu, MenuItem, TextField } from '@mui/material';
import { CustomButton as Button, ButtonGroup } from './Search.styles';
import { KeyboardArrowDown, SearchRounded } from '@mui/icons-material';

import useMediaQuery from 'Hooks/useMediaQuery';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { getUserLocation } from 'Services/Auth/Auth.actions';
import { getCountries } from 'Services/Search/Search.action';

const Search = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: any) => state.Search.countries);

  const user: UserType = useSelector((state) => state.Auth.user);

  const { isTabletOrMobile } = useMediaQuery();
  const [searchType, setSearchType] = useState('buy-button');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);

  const { handleSubmit, control } = useForm();

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

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
              disableRipple
              // onClick={handleClose}
            >
              {/* <Field name="minprice" type="number">
                {(props) => (
                  <TextField
                    name={props.input.name}
                    value={props.input.value}
                    type="number"
                    onChange={props.input.onChange}
                    placeholder="Min. Price"
                  />
                )}
              </Field> */}
            </MenuItem>
            <MenuItem
              dense
              sx={{
                width: '300px',
                textAlign: 'center',
                marginBottom: '-5px',
                padding: '20px 20px 20px 20px'
              }}
              // onClick={handleClose}
            >
              {/* <Field name="maxprice">
                {(props) => (
                  <TextField
                    name={props.input.name}
                    value={props.input.value}
                    type="number"
                    onChange={props.input.onChange}
                    placeholder="Max. Price"
                  />
                )}
              </Field> */}
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
            name="country"
            label="Country"
            keySelect="cod"
            labelSelect="name"
            disableClearable
            autoSelect
            options={countries}
            control={control}
            style={{ width: '130px' }}
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
