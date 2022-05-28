import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { SnackbarState } from 'Types/Snackbar/Snackbar.types';

export const initialState: SnackbarState = {
  isShowing: false,
  message: '',
  color: 'info'
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.message = action.payload.message;
      state.color = action.payload.color;
      state.isShowing = true;
    },
    hideSnackbar: (state: SnackbarState) => {
      state.isShowing = false;
    }
  }
});

const { actions, reducer } = snackbarSlice;

export const { showSnackbar, hideSnackbar } = actions;

export default reducer;
