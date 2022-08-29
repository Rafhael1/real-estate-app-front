import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '../../Utils/Hooks/Redux';
import { Stack, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { UserType, AuthProps } from 'Types/Auth/Auth.types';

import { TextField } from 'Components';

import { register } from 'Services/Auth/Auth.actions';
import { LoadingButton } from '@mui/lab';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

const Register = ({ isModalOpen, handleModalOpen }: AuthProps) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.Auth);
	const { control, handleSubmit } = useForm();
	const { isMobile } = useMediaQuery();

	return (
		<Dialog
			open={isModalOpen}
			onClose={() => handleModalOpen('register')}
			transitionDuration={1}
			PaperProps={{ sx: { borderRadius: '25px', height: '450px' } }}
		>
			<DialogTitle sx={{ alignSelf: 'center' }}>Create Account</DialogTitle>
			<DialogContent>
				<form
					onSubmit={handleSubmit(async (values: UserType) => {
						await dispatch(register(values));
						handleModalOpen('register');
					})}
				>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={0}
					>
						<TextField
							name="name"
							color="primary"
							label="Name"
							type="text"
							control={control}
							sx={{ width: isMobile ? '250px' : null }}
						/>
						<TextField
							required
							name="email"
							color="primary"
							label="Email"
							type="email"
							control={control}
							sx={{ width: isMobile ? '250px' : null }}
						/>
						<TextField
							required
							name="password"
							color="primary"
							label="Password"
							type="password"
							control={control}
							sx={{ width: isMobile ? '250px' : null }}
						/>
						<LoadingButton
							loading={authState.isLoading}
							sx={{ width: '200px' }}
							type="submit"
						>
							Sign Up
						</LoadingButton>
					</Stack>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default Register;
