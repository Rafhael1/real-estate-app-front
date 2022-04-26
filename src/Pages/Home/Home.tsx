import React from 'react';

import { Button } from '@mui/material';
import NavBar from '../../Layout/Navbar/Navbar';
import SearchContainer from 'Components/Forms/Search/Search';

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchContainer />
      <Button>Home Page</Button>
    </>
  );
};

export default Home;
