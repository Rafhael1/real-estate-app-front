import React, { useState } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { renderTextField, renderAutocomplete } from 'Components';
import { Menu, MenuItem } from '@mui/material';
import { CustomButton as Button, ButtonGroup } from './Search.styles';
import { KeyboardArrowDown, SearchRounded } from '@mui/icons-material';
import useMediaQuery from 'Hooks/useMediaQuery';

const Search = ({ handleSubmit }: any) => {
  const { isTabletOrMobile } = useMediaQuery();

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

  return (
    <Form>
      <ButtonGroup
        orientation={isTabletOrMobile ? 'vertical' : 'horizontal'}
        variant="text"
        aria-label="text button group"
      >
        <Button id="basic-button">Buy</Button>
        <Button id="basic-button">Rent</Button>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Looking for
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Property Type
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Price
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <Field
          component={renderTextField}
          name="city"
          type="text"
          label="City"
          color="secondary"
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
        <Button addBackground color="success" startIcon={<SearchRounded />}>
          Search
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default reduxForm<{}>({
  form: 'SearchForm'
})(Search);
