import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'Utils/Hooks/Redux';
import { Box, Typography, Divider, Container, Button } from '@mui/material';
import { BlueTypography } from './Footer.styles';
import { Login } from 'Components';

const Footer = () => {
	const isAuth = useSelector((state) => state.Auth.isAuthenticated);
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState({
		login: false
	});

	const goToDashboard = () => {
		navigate('/dashboard');
	};

	const handleModalOpen = () => {
		if (!isAuth) {
			return setIsModalOpen({
				login: true
			});
		} else {
			return goToDashboard();
		}
	};

	return (
		<Box
			sx={{
				position: 'absolute',
				top: '100vh',
				width: '100%',
				padding: '0.5rem',
				backgroundColor: 'primary.dark'
			}}
		>
			<Container>
				<Box margin={2} display="flex" justifyContent="space-between">
					<Box display="flex" alignItems={'center'} margin={0} gap={1}>
						<Typography
							color="text.light"
							sx={{ fontWeight: 800 }}
							variant="h4"
						>
							Get your dream
						</Typography>
						<BlueTypography sx={{ fontWeight: 800 }} variant="h4">
							home
						</BlueTypography>
					</Box>
					<Button color="secondary" onClick={handleModalOpen}>
						Advertise with us
					</Button>
				</Box>
				<Divider
					sx={{ backgroundColor: 'text.secondary', opacity: 0.3 }}
					light
					variant="middle"
				/>
				<Box margin={3}>
					<Typography color="text.light" variant="h6">
						Namei
					</Typography>
					<Box textAlign={'center'}>
						<Typography variant="body2" color="text.secondary">
							&copy; {new Date().getFullYear()} - All rights reserved.
						</Typography>
					</Box>
				</Box>
			</Container>
			<Login
				isModalOpen={isModalOpen.login}
				handleModalOpen={handleModalOpen}
			/>
		</Box>
	);
};

export default Footer;
