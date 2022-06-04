import React from 'react';

import NavBar from '../../Components/Layout/Navbar/Navbar';
import SearchContainer from 'Components/Search/Search';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <NavBar />
      <Box>
        <SearchContainer />
      </Box>
    </>
  );
};

export default Home;
