import React, { useState } from 'react';

import PropertyFormModal from './modals/PropertyFormModal';
import { Navbar } from 'Components';
import { Box, Button } from '@mui/material';

const Dashboard = () => {
  const [openPropertyModal, setOpenPropertyModal] = useState(false);

  const handleOpenModal = () => {
    setOpenPropertyModal(true);
  };

  const handleCloseModal = () => {
    setOpenPropertyModal(false);
  };

  return (
    <>
      <Navbar />
      <Box>
        <PropertyFormModal
          open={openPropertyModal}
          handleClose={handleCloseModal}
        />
        <Button onClick={handleOpenModal}>Open</Button>
      </Box>
    </>
  );
};

export default Dashboard;
