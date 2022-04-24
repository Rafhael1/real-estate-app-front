import React from 'react';
import { useSelector, useDispatch } from 'Hooks/Redux';
import {
  Snackbar as MuiSnackbar,
  IconButton,
  Alert,
  Slide
} from '@mui/material';
import { hideSnackbar } from 'Services/Snackbar/Snackbar.slices';
import { CloseRounded } from '@mui/icons-material';

const Snackbar = () => {
  const dispatch = useDispatch();

  const snackbar = useSelector((state) => state.Snackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <div>
      <Slide in={snackbar.isShowing} direction="down">
        <MuiSnackbar
          open={snackbar.isShowing}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          action={
            <IconButton color="inherit" onClick={handleClose}>
              <CloseRounded />
            </IconButton>
          }
        >
          <Alert
            severity={snackbar.color}
            sx={{ width: '100%' }}
            onClose={handleClose}
          >
            {snackbar.message}
          </Alert>
        </MuiSnackbar>
      </Slide>
    </div>
  );
};

export default Snackbar;
