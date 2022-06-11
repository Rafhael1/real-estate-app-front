import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Dialog,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { PropertyForm, ImagesForm, TransitionDialog } from 'Components';
import {
  Close,
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded
} from '@mui/icons-material';

interface PropertyFormModalProps {
  open: boolean;
  handleClose: () => void;
  edit?: boolean;
}

const PropertyFormModal = ({
  open,
  handleClose,
  edit
}: PropertyFormModalProps) => {
  const { control, handleSubmit } = useForm();
  const [activeStep, setActiveStep] = useState(0);

  const steps: string[] = ['Add property information', 'Add images'];

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <PropertyForm control={control} />;
      case 1:
        return <ImagesForm />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      // We do this so we don't have to set the last step to be completed
      prevActiveStep < steps.length - 1 ? prevActiveStep + 1 : prevActiveStep
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep
    );
  };

  return (
    <Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={TransitionDialog}
      >
        <form onSubmit={handleSubmit((values) => console.log(values))}>
          <AppBar
            sx={{ position: 'relative', backgroundColor: 'primary.dark' }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {edit ? 'Edit Property' : 'Add Property'}
              </Typography>
              <Button color="secondary" type="submit">
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <Stepper
            activeStep={activeStep}
            sx={{ width: '600px', m: '20px auto' }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {renderForm()}
          <Box
            sx={{
              justifyContent: 'flex-end',
              position: 'fixed',
              top: '93vh',
              right: 0,
              mr: 3,
              mb: 5
            }}
          >
            <Button
              onClick={handleBack}
              sx={{ width: '120px', mr: 2 }}
              startIcon={<ArrowBackIosNewRounded />}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              sx={{ width: '120px' }}
              endIcon={<ArrowForwardIosRounded />}
              // We do this so we don't have to set the last step to be completed
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </Box>
        </form>
      </Dialog>
    </Box>
  );
};

export default PropertyFormModal;
