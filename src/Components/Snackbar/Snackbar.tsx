import React from 'react';
import { useSelector, useDispatch } from 'Utils/Hooks/Redux';
import {
	Snackbar as MuiSnackbar,
	Alert,
	Slide,
	SlideProps
} from '@mui/material';
import { hideSnackbar } from 'Services/Snackbar/Snackbar.slices';

const SlideTransition = (props: SlideProps) => {
	return <Slide {...props} direction="down" />;
};

const Snackbar = () => {
	const dispatch = useDispatch();

	const snackbar = useSelector((state) => state.Snackbar);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		dispatch(hideSnackbar());
	};

	return (
		<div>
			<MuiSnackbar
				open={snackbar.isShowing}
				autoHideDuration={4000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				TransitionComponent={SlideTransition}
			>
				<Alert
					severity={snackbar.color}
					sx={{ width: '100%' }}
					onClose={handleClose}
				>
					{snackbar.message}
				</Alert>
			</MuiSnackbar>
		</div>
	);
};

export default Snackbar;
