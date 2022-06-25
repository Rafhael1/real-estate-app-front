import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'Hooks/Redux';

import { Box, Button, Container, Grid } from '@mui/material';
import { Navbar, PostDashboard, PostDashboardSkeleton } from 'Components';
import { AddBoxRounded } from '@mui/icons-material';
import PropertyFormModal from './modals/PropertyFormModal';

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
          <Grid container spacing={1}>
            {/* Create Button */}
            <Grid item xs={10} />
            <Grid item xs={2}>
              <Button onClick={handleOpenModal} endIcon={<AddBoxRounded />}>
                Create Post
              </Button>
            </Grid>
            {/*  */}
            {dashboardSlice.isLoading
              ? [0, 1, 2, 3, 4, 5].map((el) => (
                  <span key={el}>
                    <PostDashboardSkeleton />
                  </span>
                ))
              : dashboardSlice.realEstates?.map((item) => (
                  <Grid key={item._id} item xs={4}>
                    <PostDashboard
                      content={{
                        ...item,
                        images: item.images.filter((i: string) => i !== null)
                      }}
                    />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
