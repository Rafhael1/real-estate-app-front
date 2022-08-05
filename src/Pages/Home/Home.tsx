import React from 'react';

import { Box } from '@mui/material';
import { Footer, Navbar, SearchBar } from 'Components';
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
      <Footer />
    </>
  );
};

export default Home;
