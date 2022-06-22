import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Grid
} from '@mui/material';
import { ImageSlider } from 'Components';
import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import {
  EditRounded,
  DeleteRounded,
  Circle,
  SquareFootRounded,
  BathtubRounded,
  HotelRounded
} from '@mui/icons-material';

interface PostDashboardProps {
  content: IrealEstates;
}

const PostDashboard = ({ content }: PostDashboardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={content?.title}
        action={
          <Box>
            <IconButton color="info">
              <EditRounded />
            </IconButton>
            <IconButton color="error">
              <DeleteRounded />
            </IconButton>
          </Box>
        }
      />
      <ImageSlider
        imageDimension={{ width: '345px', height: '250px' }}
        images={content?.images}
      />
      <Box
        padding="0px 10px 5px 10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ borderBottom: '1px solid', borderBottomColor: 'neutral.light' }}
      >
        <Typography variant="body1" sx={{ alignItems: 'center' }}>
          {content?.address}, {content?.city} - {content?.country}
        </Typography>
        <Typography
          noWrap
          variant="subtitle2"
          sx={{
            color: 'success.light',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <Circle sx={{ fontSize: '15px' }} /> Active
        </Typography>
      </Box>
      <>
        <Grid container spacing={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={4}>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                borderRight: '1px solid',
                borderRightColor: 'neutral.light',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                justifyContent: 'center'
              }}
            >
              <HotelRounded /> {content?.squareMeter}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                borderRight: '1px solid',
                borderRightColor: 'neutral.light',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                justifyContent: 'center'
              }}
            >
              <BathtubRounded /> {content?.squareMeter}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                justifyContent: 'center'
              }}
            >
              <SquareFootRounded /> {content?.squareMeter}
            </Typography>
          </Grid>
        </Grid>
      </>
    </Card>
  );
};

export default PostDashboard;
