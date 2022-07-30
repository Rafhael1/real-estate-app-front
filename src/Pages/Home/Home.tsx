import React from 'react';

import { Box } from '@mui/material';
import { Navbar, SearchBar } from 'Components';
import House from 'Assets/Images/house.jpeg';
import { StyledHouseImg } from './Home.styles';

const Home = () => {
  return (
    <>
      <Navbar transparent />
      <Box>
        <StyledHouseImg />
      </Box>
      <Box zIndex={2} marginTop={-5} textAlign="center">
        <SearchBar />
      </Box>
    </>
  );
};

export default Home;
