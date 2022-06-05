import React from 'react';

import { Box } from '@mui/material';
import { Navbar, SearchBar } from 'Components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Box marginTop={5} textAlign="center">
        <SearchBar />
      </Box>
    </>
  );
};

export default Home;
