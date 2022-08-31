import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSuspense = () => {
	return (
		<Box marginTop={'50vh'} justifyContent="center" sx={{ display: 'flex' }}>
			<CircularProgress
				sx={{
					color: (theme) => theme.palette.primary.dark,
					animationDuration: '550ms'
				}}
				variant="indeterminate"
				size={45}
				thickness={5}
			/>
		</Box>
	);
};

export default LoadingSuspense;
