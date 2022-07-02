import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'Hooks/Redux';

import { Box, Button, Container, Grid } from '@mui/material';
import { Navbar, PostDashboard, PostDashboardSkeleton } from 'Components';
import { AddBoxRounded } from '@mui/icons-material';
import PropertyFormModal from './modals/PropertyFormModal';
import NoData from 'Assets/Svg/no_data.svg';

import { getRealEstates } from 'Services/Dashboard/Dashboard.actions';
import { IrealEstates } from 'Types/Dashboard/Dashboard.types';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [openPropertyModal, setOpenPropertyModal] = useState(false);
  const dashboardSlice = useSelector((state) => state.Dashboard);

  const handleOpenModal = () => {
    setOpenPropertyModal(true);
  };

  const handleCloseModal = () => {
    setOpenPropertyModal(false);
  };

  useEffect(() => {
    dispatch(getRealEstates());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <PropertyFormModal
          open={openPropertyModal}
          closeModal={handleCloseModal}
        />
        <Box>
          <Grid container spacing={1} margin="0 auto">
            {/* Create Button */}
            <Grid item xs={12}>
              <Button onClick={handleOpenModal} endIcon={<AddBoxRounded />}>
                Create Post
              </Button>
            </Grid>
            {/*  */}
            {dashboardSlice.isLoading ? (
              [0, 1, 2, 3, 4, 5].map((el) => (
                <span key={el}>
                  <PostDashboardSkeleton />
                </span>
              ))
            ) : dashboardSlice?.noData ? (
              <Grid item xs={12} textAlign="center">
                <img
                  src={NoData}
                  width="320px"
                  height="320px"
                  style={{ marginTop: '30px' }}
                />
              </Grid>
            ) : (
              dashboardSlice?.realEstates?.map((item) => (
                <Grid key={item._id} item xs={4}>
                  <PostDashboard
                    content={{
                      ...item,
                      images: item.images.filter((i: string) => i !== null)
                    }}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
