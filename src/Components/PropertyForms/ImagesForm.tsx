import React, { useEffect, useState } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import { InputFileField } from 'Components';
import {
  CameraAltRounded,
  DeleteRounded,
  AddAPhoto
} from '@mui/icons-material';
import ImagePlaceHolder from 'Assets/Images/image_placeholder.jpg';

import convertToBase64 from 'Utils/convertFileToBase64';

const Image = ({ image }) => {
  const [imageBase64, setImageBase64] = useState('');

  useEffect(() => {
    if (image) {
      const getImage = async () => {
        const base64: any = await convertToBase64(image);
        setImageBase64(base64);
      };
      getImage();
    }
  }, [image]);

  return <img src={imageBase64 || image} height="200px" width="320px" />;
};

const ImagesForm = ({ control }) => {
  const { fields, remove } = useFieldArray({
    control,
    name: 'images'
  });
  const watchImages = useWatch({ control, name: 'images' });

  return (
    <Box display="flex">
      <Container>
        <Grid container spacing={2}>
          {fields.map((field, index) => (
            <Grid xs={4} item key={index}>
              <Card
                sx={{ width: 320, height: 350, background: 'background' }}
                elevation={1}
                key={field.id}
              >
                <Image
                  image={
                    watchImages && watchImages[index]?.value
                      ? watchImages[index]?.value[0]
                      : ImagePlaceHolder
                  }
                />
                <CardContent>
                  <Typography variant="body1">
                    {watchImages && watchImages[index]?.value
                      ? watchImages[index]?.value[0].name
                      : 'File Name'}
                  </Typography>
                </CardContent>
                <CardActions sx={{ gap: 1, justifyContent: 'center' }}>
                  <InputFileField
                    name={`images.${index}.value`}
                    control={control}
                    endIcon={<CameraAltRounded />}
                  />
                  {/* <Button
                    disabled={fields.length <= 1}
                    onClick={() => remove(index)}
                    color="error"
                    endIcon={<DeleteRounded />}
                  >
                    Remove
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImagesForm;
