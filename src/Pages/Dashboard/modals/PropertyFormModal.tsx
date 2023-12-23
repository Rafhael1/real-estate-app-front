import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'Utils/Hooks/Redux';
import {
	Box,
	Button,
	Dialog,
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Stepper,
	Step,
	StepLabel
} from '@mui/material';
import { TransitionDialog } from 'Components';
import PropertyForm from '../PropertyForms/PropertyForm';
import ImagesForm from '../PropertyForms/ImagesForm';
import {
	Close,
	ArrowBackIosNewRounded,
	ArrowForwardIosRounded,
	SaveRounded
} from '@mui/icons-material';
import convertToBase64 from 'Utils/convertFileToBase64';
import {
	addNewRealEstate,
	editRealEstate
} from 'Services/Dashboard/Dashboard.actions';
import { clearSelectedPost } from 'Services/Dashboard/Dashboard.slices';
import { IrealEstates } from 'Types/Dashboard/Dashboard.types';
import compressBase64Image from 'Utils/compressBase64Image';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

interface PropertyFormModalProps {
	open: boolean;
	closeModal: () => void;
	edit?: boolean;
}

const PropertyFormModal = ({
	open,
	closeModal,
	edit
}: PropertyFormModalProps) => {
	const { selectedPost } = useSelector((state) => state.Dashboard);
	const { countries } = useSelector((state) => state.Search);

	const { control, handleSubmit, reset, setValue } = useForm({
		defaultValues: {
			country: { name: '', cod: '' }
		}
	});
	const [activeStep, setActiveStep] = useState(0);
	const dispatch = useDispatch();
	const { isMobile } = useMediaQuery();

	useEffect(() => {
		const countryName = countries?.find((i) => i.cod === selectedPost.country);
		reset({
			...selectedPost,
			country: {
				name: countryName?.name || 'Portugal',
				cod: countryName?.cod || 'PT'
			},
			// @ts-ignore
			images: selectedPost?.images || []
		});
	}, [open]);

	// Steps titles
	const steps: string[] = useMemo(() => {
		return edit
			? ['Edit/Add property information', 'Edit/Add images']
			: ['Add property information', 'Add images'];
	}, [edit]);

	const renderForm = () => {
		switch (activeStep) {
			case 0:
				return (
					<Box textAlign={'center'}>
						<PropertyForm control={control} />
					</Box>
				);
			case 1:
				return (
					<Box textAlign={'center'}>
						<ImagesForm
							control={control}
							isEditing={edit}
							images={selectedPost.images?.filter((i: string) => i !== null)}
						/>
					</Box>
				);
			default:
				return null;
		}
	};

	// Handle next step
	const handleNext = () => {
		setActiveStep((prevActiveStep) =>
			// We do this so we don't have to set the last step to be completed
			prevActiveStep < steps?.length - 1 ? prevActiveStep + 1 : prevActiveStep
		);
	};

	// Handle previous step
	const handleBack = () => {
		setActiveStep((prevActiveStep) =>
			prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep
		);
	};

	const onSubmit = handleSubmit(async (values: IrealEstates) => {
		const images: string[] = await Promise.all(
			values.images.map(async (image: any) => {
				// If image is a data url, we need to convert it to base64
				if (image.thumbnail) {
					const base64Image = await convertToBase64(image.thumbnail);
					const compressedImage = await compressBase64Image(
						base64Image as string
					);
					return compressedImage;
				}
				return image;
			})
		);
		if (edit) {
			await dispatch(
				editRealEstate({
					postId: selectedPost._id,
					body: { ...values, images }
				} as { postId: string; body: IrealEstates })
			);
		} else {
			await dispatch(addNewRealEstate({ ...values, images } as IrealEstates));
		}
		return handleClose();
	});

	const handleClose = () => {
		dispatch(clearSelectedPost());
		reset();
		closeModal();
	};

	return (
		<Box>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={TransitionDialog}
			>
				<form onSubmit={onSubmit}>
					<AppBar
						sx={{ position: 'relative', backgroundColor: 'primary.dark' }}
					>
						<Toolbar>
							<IconButton
								edge="start"
								color="inherit"
								onClick={handleClose}
								aria-label="close"
							>
								<Close />
							</IconButton>
							<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
								{edit ? 'Edit Property' : 'Add Property'}
							</Typography>
							<Button color="secondary" type="submit" endIcon={<SaveRounded />}>
								Save
							</Button>
						</Toolbar>
					</AppBar>
					<Stepper
						activeStep={activeStep}
						sx={{ width: isMobile ? '300px' : '600px', m: '20px auto' }}
					>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{renderForm()}
					<Box
						sx={{
							float: 'right',
							top: '93%',
							position: !isMobile ? 'fixed' : null,
							right: 0,
							mr: 3
						}}
					>
						<Button
							onClick={handleBack}
							sx={{ width: '120px', mr: 2 }}
							startIcon={<ArrowBackIosNewRounded />}
						>
							Back
						</Button>
						<Button
							onClick={handleNext}
							sx={{ width: '120px' }}
							endIcon={<ArrowForwardIosRounded />}
							// We do this so we don't have to set the last step to be completed
							disabled={activeStep === steps?.length - 1}
						>
							Next
						</Button>
					</Box>
				</form>
			</Dialog>
		</Box>
	);
};

export default PropertyFormModal;
