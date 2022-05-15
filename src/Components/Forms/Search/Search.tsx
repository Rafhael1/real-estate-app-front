import React, { useState, useMemo, useEffect } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { IFormValues } from 'Types/Search/Search.types';
import { UserType } from 'Types/Auth/Auth.types';

import { renderAutocomplete } from 'Components';
import { Menu, MenuItem, Slider, Popover, Card, Grow } from '@mui/material';
import { CustomButton as Button, ButtonGroup } from './Search.styles';
import { KeyboardArrowDown, SearchRounded } from '@mui/icons-material';

import useMediaQuery from 'Hooks/useMediaQuery';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { getUserLocation } from 'Services/Auth/Auth.actions';
import { getCountries } from 'Services/Search/Search.action';

const Search = ({ handleSubmit }: any) => {
  const dispatch = useDispatch();

  const user: UserType = useSelector((state) => state.Auth.user);

  const { isTabletOrMobile } = useMediaQuery();
  const [searchType, setSearchType] = useState('buy-button');
  const [searchText, setSearchText] = useState('');
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([
    {
      city: 'New York',
      state: 'NY'
    },
    {
      city: 'New Jersey',
      state: 'NJ'
    },
    {
      city: 'Miami',
      state: 'FL'
    }
  ]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);

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

  const onTextChanged = (val: string) => {
    if (val.length >= 3) {
      console.log(val);
    } else {
      setAutoCompleteOptions([
        {
          city: 'New York',
          state: 'NY'
        },
        {
          city: 'New Jersey',
          state: 'NJ'
        },
        {
          city: 'Miami',
          state: 'FL'
        }
      ]);
      setSearchText(val);
      // this.setState({ searchText: val, autoCompleteOptions: [] });
    }
  };

  const onSubmit = handleSubmit((values: IFormValues) => {
    console.log(values);
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(getUserLocation());
  }, []);

  return (
    <Form onSubmit={onSubmit}>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
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
          <MenuItem onClick={handleClose}>3</MenuItem>
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
        <Field
          component={renderAutocomplete}
          onTextChanged={onTextChanged}
          options={autoCompleteOptions}
          optionValRespKey="state"
          name="city"
          type="text"
          label="City"
          color="secondary"
          onFetchResult={(val: string) => {
            console.log(val);
          }}
          style={{ width: '170px' }}
        />
        <Field
          component={renderAutocomplete}
          onTextChanged={onTextChanged}
          options={autoCompleteOptions}
          optionValRespKey="state"
          name="country"
          type="text"
          label="Country"
          color="secondary"
          onFetchResult={(val: string) => {
            console.log('val', val);
          }}
          style={{ width: '110px', marginRight: '10px' }}
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
    </Form>
  );
};

export default reduxForm<{}>({
  form: 'SearchForm'
})(Search);
