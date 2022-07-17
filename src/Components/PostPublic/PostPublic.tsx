import React from 'react';
import { Box, Grid, Card, Stack, Typography } from '@mui/material';
import { CustomTypography } from './PostPublic.styles';
import { ImageSlider } from 'Components';
import {
  BathtubRounded,
  HotelRounded,
  SquareFootRounded
} from '@mui/icons-material';

import { IrealEstates } from 'Types/Dashboard/Dashboard.types';

interface PostPublicProps {
  content: IrealEstates;
}

const PostPublic = ({ content }: PostPublicProps) => {
  return (
    <Card>
      <Box>
        <ImageSlider />
      </Box>
      <Box>
        <Stack>
          <Typography variant="h2">{content.title}</Typography>
          <Typography variant="h6">{content.address}</Typography>
          <Typography variant="body2">{content.description}</Typography>
          <Grid container spacing={1} sx={{ textAlign: 'center' }}>
            <Grid item xs={4}>
              <CustomTypography noWrap variant="subtitle2">
                <HotelRounded /> {content.squareMeter}
              </CustomTypography>
            </Grid>
            <Grid item xs={4}>
              <CustomTypography noWrap variant="subtitle2">
                <BathtubRounded /> {content.squareMeter}
              </CustomTypography>
            </Grid>
            <Grid item xs={4}>
              <CustomTypography noWrap variant="subtitle2">
                <SquareFootRounded /> {content.squareMeter}
              </CustomTypography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Card>
  );
};

export default PostPublic;
