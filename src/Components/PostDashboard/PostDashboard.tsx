import React, { useState } from 'react';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Grid,
  DialogContent,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button
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
import { deleteRealEstate } from 'Services/Dashboard/Dashboard.actions';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

interface PostDashboardProps {
  content: IrealEstates;
  handleOpenEditForm: () => void;
}

interface DeleteDialogProps {
  open: boolean;
  handleClose: () => void;
  postId: string;
}

const PostDashboard = ({ content, handleOpenEditForm }: PostDashboardProps) => {
  const { isMobile } = useMediaQuery();

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <Card sx={{ width: isMobile ? 320 : 340 }}>
      <DeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        postId={content._id}
      />
      <CardHeader
        title={content?.title}
        action={
          <Box>
            <IconButton
              color="info"
              onClick={() => {
                handleOpenEditForm();
                console.log('edit');
              }}
            >
              <EditRounded />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                return handleOpenDeleteDialog();
              }}
            >
              <DeleteRounded />
            </IconButton>
          </Box>
        }
      />
      <ImageSlider
        imageDimension={{ width: '350px', height: '250px' }}
        images={content?.images}
      />
      <Box
        padding="5px 10px 5px 10px"
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

const DeleteDialog = ({ open, handleClose, postId }: DeleteDialogProps) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    handleClose();
    return dispatch(deleteRealEstate(postId));
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <DialogTitle id="delete-dialog-title">Delete Post</DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          Are you sure you want to delete this post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="error">
          Cancel
        </Button>
        <Button
          onClick={handleConfirmDelete}
          color="error"
          endIcon={<DeleteRounded />}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostDashboard;
