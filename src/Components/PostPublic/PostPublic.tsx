import React from 'react';
import { Box, Grid, Card, Stack, Typography } from '@mui/material';
import { CustomTypography } from './PostPublic.styles';
import { ImageSlider } from 'Components';
import {
	BathtubRounded,
	HotelRounded,
	SquareFootRounded
} from '@mui/icons-material';

import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

interface PostPublicProps {
	content: IrealEstates;
}

const PostPublic = ({ content }: PostPublicProps) => {
	const { isMobile } = useMediaQuery();
	return (
		<>
			{isMobile ? (
				<PostPublicMobile content={content} />
			) : (
				<PostPublicDesktop content={content} />
			)}
		</>
	);
};

const PostPublicDesktop = ({ content }: PostPublicProps) => {
	return (
		<Card
			sx={{
				width: '65%',
				height: '200px',
				margin: '0 auto',
				justifyContent: 'center'
			}}
		>
			<Box display="flex">
				<Box>
					<ImageSlider
						//imageDimension={{ width: '150px', height: '150px' }}
						images={content?.images.filter((i: string) => i !== null)}
					/>
				</Box>
				<Box width="100%" height="100%">
					<Stack>
						<Box marginLeft="20px" height="160px">
							<Typography variant="h5">{content?.title}</Typography>
							<Typography variant="subtitle2">{content?.address}</Typography>
							<Typography variant="body1">{content?.description}</Typography>
						</Box>
						<Box
							height="40px"
							textAlign="center"
							borderTop="1px solid grey"
							display={'flex'}
						>
							<Grid container>
								<Grid item xs={4}>
									<CustomTypography noWrap variant="subtitle2">
										<HotelRounded /> {content?.bedrooms}
									</CustomTypography>
								</Grid>
								<Grid item xs={4}>
									<CustomTypography noWrap variant="subtitle2">
										<BathtubRounded /> {content?.bathrooms}
									</CustomTypography>
								</Grid>
								<Grid item xs={4}>
									<CustomTypography noWrap hideBorderRight variant="subtitle2">
										<SquareFootRounded /> {content?.squareMeter}
									</CustomTypography>
								</Grid>
							</Grid>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Card>
	);
};

const PostPublicMobile = ({ content }: PostPublicProps) => {
	return (
		<Card
			sx={{
				width: '85%',
				height: '350px',
				margin: '0 auto',
				justifyContent: 'center'
			}}
		>
			<Box>
				<ImageSlider
					imageDimension={{ height: '200px' }}
					images={content?.images.filter((i: string) => i !== null)}
				/>
			</Box>
			<Box width="100%">
				<Stack>
					<Box marginLeft="10px" height="120px">
						<Typography variant="h5">{content?.title}</Typography>
						<Typography variant="subtitle2">{content?.address}</Typography>
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
									<HotelRounded /> {content?.bedrooms}
								</CustomTypography>
							</Grid>
							<Grid item xs={4}>
								<CustomTypography noWrap variant="subtitle2">
									<BathtubRounded /> {content?.bathrooms}
								</CustomTypography>
							</Grid>
							<Grid item xs={4}>
								<CustomTypography noWrap hideBorderRight variant="subtitle2">
									<SquareFootRounded /> {content?.squareMeter}
								</CustomTypography>
							</Grid>
						</Grid>
					</Box>
				</Stack>
			</Box>
		</Card>
	);
};

export default PostPublic;
