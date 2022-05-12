import React, { useState, useEffect } from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import { renderAutocomplete } from 'Components';
import { Menu, MenuItem } from '@mui/material';
import { CustomButton as Button, ButtonGroup } from './Search.styles';
import { KeyboardArrowDown, SearchRounded } from '@mui/icons-material';

import useMediaQuery from 'Hooks/useMediaQuery';
import { useDispatch } from 'Hooks/Redux';
import { getUserLocation } from 'Services/Auth/Auth.actions';

const Search = ({ handleSubmit }: any) => {
  const dispatch = useDispatch();

  const { isTabletOrMobile } = useMediaQuery();

  const [searchType, setSearchType] = useState('buy');
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
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onTextChanged = (val) => {
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

  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });

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
        <Button id="buy-button">Buy</Button>
        <Button id="rent-button">Rent</Button>
        <Button
          id="buy-button-menu"
          aria-controls={open ? 'buy-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Looking for
        </Button>
        <Menu
          id="rent-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'rent-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button
          id="property-button"
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
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'property-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
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
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'price-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
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
          color="secondary"
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
