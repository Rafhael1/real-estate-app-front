import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';

import { Box, Container, Grid, Typography } from '@mui/material';
import { SearchBar, GradientDash, PostSmall } from 'Components';
import { StyledHouseImg } from './Home.styles';

import { getTrendingProperties } from 'Services/Search/Search.action';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

const Home = () => {
	const dispatch = useDispatch();
	const { trendingPosts } = useSelector((state) => state.Search);

	const { isMobile } = useMediaQuery();

	useEffect(() => {
		dispatch(getTrendingProperties());
	}, []);

	return (
		<Box minHeight={'90vh'}>
			<Box>
				<StyledHouseImg />
			</Box>
			<Container>
				<Box zIndex={2} marginTop={-5} textAlign="center">
					<SearchBar />
				</Box>
				<Box marginTop={'25px'}>
					<Box display={'inline'}>
						<GradientDash />
						<Typography
							variant={isMobile ? 'h5' : 'h4'}
							fontWeight={700}
							textAlign="left"
						>
							Trending properties
						</Typography>
					</Box>
					<Grid container spacing={2} marginTop="5px">
						{trendingPosts?.map((post) => (
							<Grid key={post._id} item xs={isMobile ? 12 : 4}>
								<PostSmall post={post} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Home;
