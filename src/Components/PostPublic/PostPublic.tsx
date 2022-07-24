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
    <Card sx={{ width: '75%', height: '200px', margin: '0 auto' }}>
      <Box display="flex">
        <Box>
          <ImageSlider images={content?.images} />
        </Box>
        <Box>
          <Stack>
            <Typography variant="h2">{content?.title}</Typography>
            <Typography variant="h6">{content?.address}</Typography>
            <Typography variant="body2">{content?.description}</Typography>
            <Box display={'flex'}>
              <Grid container spacing={1} sx={{ textAlign: 'center' }}>
                <Grid item xs={12} sx={{ display: 'flex' }}>
                  <Grid item xs={4}>
                    <CustomTypography noWrap variant="subtitle2">
                      <HotelRounded /> {content?.squareMeter}
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTypography noWrap variant="subtitle2">
                      <BathtubRounded /> {content?.squareMeter}
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={4}>
                    <CustomTypography
                      noWrap
                      hideBorderRight
                      variant="subtitle2"
                    >
                      <SquareFootRounded /> {content?.squareMeter}
                    </CustomTypography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
};

export default PostPublic;
