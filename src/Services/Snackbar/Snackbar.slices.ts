import { createSlice } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material/Alert';

interface SnackbarState {
  isShowing: boolean;
  message: string;
  color: AlertColor;
}

export const initialState: SnackbarState = {
  isShowing: false,
  message: '',
  color: 'info'
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.message = action.payload.message;
      state.color = action.payload.color;
      state.isShowing = true;
    },
    hideSnackbar: (state) => {
      state.isShowing = false;
    }
  }
});

const { actions, reducer } = snackbarSlice;

export const { showSnackbar, hideSnackbar } = actions;

export default reducer;
