import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';

import { Box, Button, Container, Grid } from '@mui/material';
import { PostDashboard, PostDashboardSkeleton } from 'Components';
import { AddBoxRounded } from '@mui/icons-material';
import PropertyFormModal from './modals/PropertyFormModal';
import NoData from 'Assets/Svg/no_data.svg';

import { getRealEstates } from 'Services/Dashboard/Dashboard.actions';
import { selectPost } from 'Services/Dashboard/Dashboard.slices';

const Dashboard = () => {
	const dispatch = useDispatch();

	const [openPropertyModal, setOpenPropertyModal] = useState(false);
	const dashboardSlice = useSelector((state) => state.Dashboard);
	const { isAuthenticated } = useSelector((state) => state.Auth);
	const [editMode, setEditMode] = useState<boolean>(false);

	const handleOpenEditModal = (postId: string) => {
		dispatch(selectPost(postId));
		setOpenPropertyModal(true);
		setEditMode(true);
	};

	const handleOpenModal = () => {
		setOpenPropertyModal(true);
		setEditMode(false);
	};

	const handleCloseModal = () => {
		setOpenPropertyModal(false);
	};

	useEffect(() => {
		if (isAuthenticated) {
			dispatch(getRealEstates());
		}
	}, [openPropertyModal, isAuthenticated]);

	return (
		<Box height="100%" minHeight={"100vh"}>
			<Container>
				<PropertyFormModal
					open={openPropertyModal}
					closeModal={handleCloseModal}
					edit={editMode}
				/>
				<Box>
					<Grid container spacing={1} margin="0 auto">
						{/* Create Button */}
						<Grid item xs={12}>
							<Button onClick={handleOpenModal} endIcon={<AddBoxRounded />}>
								Create Post
							</Button>
						</Grid>
						{/*  */}
						{dashboardSlice.isLoading ? (
							Array.from({ length: 5 })?.map((el: number) => (
								<span key={el}>
									<PostDashboardSkeleton />
								</span>
							))
						) : dashboardSlice?.noData ? (
							<Grid item xs={12} textAlign="center">
								<img
									src={NoData}
									width="320px"
									height="320px"
									style={{ marginTop: '30px' }}
								/>
							</Grid>
						) : (
							<>
								{!dashboardSlice?.isLoading &&
									dashboardSlice.realEstates?.map((item) => (
										<Grid key={item._id} item xs>
											<PostDashboard
												handleOpenEditForm={() => handleOpenEditModal(item._id)}
												content={{
													...item,
													images: item.images.filter((i: string) => i !== null)
												}}
											/>
										</Grid>
									))}
							</>
						)}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Dashboard;
