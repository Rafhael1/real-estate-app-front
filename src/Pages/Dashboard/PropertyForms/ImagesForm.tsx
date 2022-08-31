import React, { useState, useCallback } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult
} from 'react-beautiful-dnd';
import { useDropzone } from 'react-dropzone';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Typography
} from '@mui/material';
import { AddPhotoAlternateRounded, DeleteRounded } from '@mui/icons-material';

import checkIsBase64 from 'Utils/checkIsBase64';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

const ImagesForm = ({ control, images, isEditing }) => {
	const [rejectedFiles, setRejectedFiles] = useState([]);
	const { isMobile } = useMediaQuery();
	const { fields, append, move, remove } = useFieldArray({
		control,
		name: 'images'
	});
	const watchImages = useWatch({ control, name: 'images' });

	const onDrop = useCallback(
		(files: File[]) => {
			// Fake upload with random fail/reject
			const upload = (file: File) =>
				new Promise((res, rej) =>
					setTimeout(
						Math.random() < 0.8
							? () => {
									res({
										slug: file.name,
										name: file.name,
										thumbnail: URL.createObjectURL(file)
									});
							  }
							: rej,
						Math.random() * 1000
					)
				);

			files.reduce(
				(promise: Promise<any>, file: File) =>
					promise
						.then(() => upload(file))
						.then((image: any) => append(image))
						.catch(() => {
							setRejectedFiles((rejectedFiles) => [
								...rejectedFiles,
								file.name
							]);
						}),
				Promise.resolve()
			);
		},
		[append]
	);

	const onDragEnd = useCallback(
		(result: DropResult) => {
			if (!result.destination) {
				return;
			}
			move(result.source.index, result.destination.index);
		},
		[move]
	);

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		maxFiles: 5,
		noClick: true,
		maxSize: 10000000, // 10mb
		onDropAccepted: onDrop
		//onDropRejected: (fileRejections) => {
		// console.log(...fileRejections.map(({ file }) => file));
		// setRejectedFiles([
		//   ...rejectedFiles,
		// ]);
		//}
	});

	return (
		<Container>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable
					droppableId="droppable"
					direction={isMobile ? 'vertical' : 'horizontal'}
				>
					{(provided) => (
						<>
							<Grid
								container
								spacing={1}
								ref={provided.innerRef}
								{...provided.droppableProps}
								sx={{
									width: '100%',
									height: '100%',
									marginBottom: '10px'
								}}
							>
								{fields.map((field, index) => (
									<Draggable
										key={field.id}
										draggableId={field.id}
										index={index}
										isDragDisabled={isEditing}
									>
										{(provided) => (
											<Grid
												item
												xs={isMobile ? 12 : 4}
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<Card
													sx={{
														backgroundColor: 'white',
														width: '350px'
													}}
												>
													<CardMedia
														component="img"
														height={'200px'}
														image={
															watchImages[index] &&
															(watchImages[index]?.thumbnail ||
																`${
																	!checkIsBase64(images?.[index]) &&
																	import.meta.env.VITE_IMAGES_URL
																}/${watchImages[index]}`)
														}
													/>
													<CardActions sx={{ gap: 2 }}>
														<IconButton
															color="error"
															onClick={() => {
																return remove(index);
															}}
														>
															<DeleteRounded />
														</IconButton>
														<Typography>
															{watchImages[index]?.name || ''}
														</Typography>
													</CardActions>
												</Card>
											</Grid>
										)}
									</Draggable>
								))}
							</Grid>
							<Box
								{...getRootProps({ className: 'dropzone' })}
								sx={{
									border: `1px dashed`,
									borderColor: isDragActive ? 'info.main' : 'primary.dark',
									backgroundColor: isDragActive ? 'info.light' : 'white',
									borderRadius: '12px',
									width: '100%',
									height: '200px',
									transition: '0.5s',
									margin: '0 auto'
								}}
							>
								<input {...getInputProps()} />
								<Box marginTop={'50px'}>
									{!isMobile && (
										<Typography>
											{isDragActive
												? 'Drop the files here ...'
												: 'Drag drop some files here, or click to select files'}
										</Typography>
									)}
									<Button
										type="button"
										onClick={open}
										endIcon={<AddPhotoAlternateRounded />}
									>
										Select File
									</Button>
								</Box>
							</Box>
						</>
					)}
				</Droppable>
			</DragDropContext>
		</Container>
	);
};

export default ImagesForm;
