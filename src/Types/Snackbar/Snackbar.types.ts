import { AlertColor } from '@mui/material/Alert';

export interface SnackbarState {
	isShowing?: boolean;
	message?: string;
	color?: AlertColor;
}
