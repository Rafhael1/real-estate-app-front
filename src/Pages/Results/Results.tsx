import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';

import { Container, Box, Grid } from '@mui/material';
import { Navbar, SearchBar, PostPublic } from 'Components';
import { getSearchResults } from 'Services/Search/Search.action';

const Results = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const searchSlice = useSelector((state) => state.Search);

  useEffect(() => {
    if (searchSlice.hasRequested) {
      dispatch(getSearchResults(null));
    }
  }, []);

  return (
    <Box>
      <Navbar />
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
        </Grid>
      </Container>
    </Box>
  );
};
export default Results;
