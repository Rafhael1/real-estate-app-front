import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';

import { Container, Box, Grid, Pagination, Typography } from '@mui/material';
import { SearchBar, PostPublic } from 'Components';
import NoData from 'Assets/Svg/no_data.svg';
import { getSearchResults } from 'Services/Search/Search.action';
import useMediaQueryHook from 'Utils/Hooks/useMediaQuery';
import useQuery from 'Utils/Hooks/useQuery';

const Results = () => {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const { isMobile } = useMediaQueryHook();
	const query = useQuery();

	const searchSlice = useSelector((state) => state.Search);

	const handlePageChange = (event, page: number) => {
		dispatch(
			getSearchResults({
				...searchSlice.form,
				page
			})
		);
	};

	useEffect(() => {
		if (!searchSlice.hasRequested) {
			dispatch(
				getSearchResults({
					country: query.get('country'),
					searchType: query.get('postType')
				})
			);
		}
	}, []);

	return (
		<Box sx={{ minHeight: '70vh' }}>
			<Container>
				<Box marginTop={5} textAlign="center">
					<SearchBar />
				</Box>
				<Grid container spacing={0} sx={{ margin: '15px auto', gap: 2 }}>
					{searchSlice.posts.map((post, index) => (
						<Grid item xs={12} key={index}>
							<PostPublic content={post} />
						</Grid>
					))}
					{!searchSlice.hasResults && (
						<Grid item xs={12} justifyContent="center">
							<Typography variant="h5" textAlign="center">
								No Results Found
							</Typography>
							<img
								src={NoData}
								width="320px"
								height="320px"
								style={{
									display: 'block',
									margin: '30px auto'
								}}
							/>
						</Grid>
					)}
				</Grid>
				<Box>
					{searchSlice.pagination.totalPages ? (
						<Pagination
							count={searchSlice.pagination.totalPages}
							shape="rounded"
							size="large"
							color="primary"
							sx={{ marginLeft: isMobile ? '30%' : '50%' }}
							onChange={handlePageChange}
						/>
					) : null}
				</Box>
			</Container>
		</Box>
	);
};
export default Results;
