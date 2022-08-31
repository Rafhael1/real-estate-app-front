import React from 'react';

import { Box } from '@mui/material';
import { SearchBar } from 'Components';
import { StyledHouseImg } from './Home.styles';

const Home = () => {
	return (
		<Box minHeight={'90vh'}>
			<Box>
				<StyledHouseImg />
			</Box>
			<Box zIndex={2} marginTop={-5} textAlign="center">
				<SearchBar />
			</Box>
		</Box>
	);
};

export default Home;
