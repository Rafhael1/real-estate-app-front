import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';
import maskMoney from 'Utils/masks/maskMoney';

import {
	Box,
	Button,
	Card,
	Container,
	Divider,
	Grid,
	Typography
} from '@mui/material';
import { ImageSlider } from 'Components';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { getPostById } from 'Services/Search/Search.action';
import {
	BathtubRounded,
	HotelRounded,
	SquareFootRounded
} from '@mui/icons-material';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

const PostDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const post = useSelector((state) => state.Search.post);

	const { isMobile } = useMediaQuery();

	const handleGoBack = () => {
		return navigate(-1);
	};

	useEffect(() => {
		dispatch(getPostById(id));
	}, [id]);

	return (
		<Box minHeight={'90vh'}>
			<Divider light sx={{ backgroundColor: 'neutral.dark', opacity: '95%' }} />
			<Box sx={{ backgroundColor: 'primary.dark' }}>
				<Container sx={{ display: 'flex', justifyContent: 'space-around' }}>
					<Box sx={{ padding: '10px 15px' }}>
						<Typography variant="h6" color="text.light">
							{post?.title}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							{post?.address}
						</Typography>
					</Box>
					<Box sx={{ padding: '10px 15px' }}>
						<Typography variant="h6" color="text.light">
							{maskMoney(post?.price?.toString() || '0')}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							{post?.status}
						</Typography>
					</Box>
				</Container>
			</Box>
			<Container sx={{ width: isMobile ? 'auto' : '704px' }}>
				<Box>
					<Button
						size="small"
						variant="text"
						startIcon={<ArrowBackRoundedIcon />}
						sx={{ height: '35px', width: '95px' }}
						onClick={handleGoBack}
					>
						Back
					</Button>
				</Box>
				<Box justifyContent={'center'}>
					<Box marginBottom={'5px'}>
						<ImageSlider
							imageDimension={{
								width: isMobile ? '100%' : '656px',
								height: isMobile ? null : '520px'
							}}
							images={post.images}
						/>
					</Box>
					<Card>
						<Typography
							variant="h6"
							component="h2"
							sx={{ padding: '10px 15px' }}
						>
							Details
						</Typography>
						<Divider />
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
									<HotelRounded /> {post?.bedrooms}
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
									<BathtubRounded /> {post?.bathrooms}
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
									<SquareFootRounded /> {post?.squareMeter}
								</Typography>
							</Grid>
						</Grid>
					</Card>
					<Card sx={{ marginTop: '10px' }}>
						<Typography
							variant="h6"
							component="h2"
							sx={{ padding: '10px 15px' }}
						>
							Description
						</Typography>
						<Divider />
						<Typography
							variant="body2"
							component="p"
							sx={{ padding: '10px 15px' }}
						>
							{post?.description}
						</Typography>
					</Card>
				</Box>
			</Container>
		</Box>
	);
};

export default PostDetails;
