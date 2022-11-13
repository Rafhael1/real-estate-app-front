import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'Utils/Hooks/Redux';

import { Box, Card, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { CustomTypography } from './PostSmall.styles';
import maskMoney from 'Utils/masks/maskMoney';
import {
	BathtubRounded,
	HotelRounded,
	SquareFootRounded
} from '@mui/icons-material';

import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import { increaseViews } from 'Services/Search/Search.action';

interface PostSmallProps {
	post: IrealEstates;
}

const PostSmall = ({ post }: PostSmallProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleNavigate = () => {
		dispatch(increaseViews(post._id));
		return navigate(`/search/${post._id}`);
	};

	return (
		<Card
			sx={{
				width: '200px',
				height: '280px',
				margin: '0 auto',
				justifyContent: 'center'
			}}
			onClick={handleNavigate}
		>
			<CardMedia
				component="img"
				image={`${import.meta.env.VITE_IMAGES_URL}/${post.images[0]}`}
				height={'140px'}
			/>
			<Box width="100%">
				<Stack>
					<Box marginLeft="10px" height="100px">
						<Typography variant="subtitle2" sx={{cursor: 'pointer'}}>{post?.title}</Typography>
						<Typography variant="subtitle1">
							Country: {post?.country}
						</Typography>
						<Typography variant="subtitle1">{post?.price}</Typography>
					</Box>
					<Box
						textAlign="center"
						height="50px"
						borderTop="1px solid grey"
						display={'flex'}
					>
						<Grid container>
							<Grid item xs={4}>
								<CustomTypography noWrap variant="subtitle2">
									<HotelRounded /> {post?.bedrooms}
								</CustomTypography>
							</Grid>
							<Grid item xs={4}>
								<CustomTypography noWrap variant="subtitle2">
									<BathtubRounded /> {post?.bathrooms}
								</CustomTypography>
							</Grid>
							<Grid item xs={4}>
								<CustomTypography noWrap hideBorderRight variant="subtitle2">
									<SquareFootRounded /> {post?.squareMeter}
								</CustomTypography>
							</Grid>
						</Grid>
					</Box>
				</Stack>
			</Box>
		</Card>
	);
};

export default PostSmall;
