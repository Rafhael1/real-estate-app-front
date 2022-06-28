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
import useMediaQuery from 'Hooks/useMediaQuery';

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

  return (
    <img src={imageBase64 || ImagePlaceHolder} height="200px" width="320px" />
  );
};

const ImagesForm = ({ control }) => {
  const { fields, remove } = useFieldArray({
    control,
    name: 'images'
  });
  const watchImages = useWatch({ control, name: 'images' });
  const { isMobile } = useMediaQuery();

  return (
    <Box display={'flex'}>
      <Container>
        <Grid container spacing={2}>
          {fields.map((field, index) => (
            <Grid xs={isMobile ? 12 : 4} item key={index}>
              <Card
                sx={{ width: 320, height: 350, background: 'background' }}
                elevation={0}
                key={field.id}
              >
                <Image
                  image={
                    watchImages &&
                    watchImages[index]?.value &&
                    watchImages[index]?.value[0]
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
