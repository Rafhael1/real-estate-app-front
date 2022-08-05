import React, { useEffect, useState } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Icon,
  Typography
} from '@mui/material';
import { InputFileField } from 'Components';
import {
  CameraAltRounded,
  AddPhotoAlternateRounded
} from '@mui/icons-material';
import ImagePlaceHolder from 'Assets/Images/image_placeholder.jpg';

import convertToBase64 from 'Utils/convertFileToBase64';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

const Image = ({ image, isEditing }) => {
  const [imageBase64, setImageBase64] = useState('');

  useEffect(() => {
    if (image && !isEditing) {
      const getImage = async () => {
        const base64: any = await convertToBase64(image);
        setImageBase64(base64);
      };
      getImage();
    }
  }, [image]);

  return (
    <img
      src={
        isEditing
          ? `${process.env.REACT_APP_IMAGES_URL}/${image}` || ImagePlaceHolder
          : imageBase64 || ImagePlaceHolder
      }
      style={{ borderRadius: '12px' }}
      height="200px"
      width="320px"
    />
  );
};

const ImagesForm = ({ control, images }) => {
  const { isMobile } = useMediaQuery();
  const { fields, append } = useFieldArray({
    control,
    name: 'images'
  });
  const watchImages = useWatch({ control, name: 'images' });

  return (
    <Box display={'flex'} sx={{ margin: '0 auto' }}>
      <Container>
        <Grid container spacing={2}>
          {fields.map((field, index) => (
            <Grid xs={isMobile ? 12 : 4} item key={index}>
              <Card
                sx={{ width: 350, height: 360, background: 'background' }}
                key={field.id}
              >
                <Box marginTop={2}>
                  <Image
                    isEditing={true}
                    image={
                      images
                        ? images[index]
                        : watchImages[index]?.value &&
                          watchImages[index]?.value[0]
                    }
                  />
                </Box>
                <CardContent>
                  <Typography variant="body1">
                    {watchImages && watchImages[index]?.value
                      ? watchImages[index]?.value[0].name.slice(0, 30).trim() +
                        '...'
                      : '-'}
                  </Typography>
                </CardContent>
                <CardActions sx={{ gap: 0, justifyContent: 'center' }}>
                  <InputFileField
                    name={`images.${index}.value`}
                    control={control}
                    endIcon={<CameraAltRounded />}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
          {fields.length < 6 && (
            <Grid xs={isMobile ? 12 : 4} item>
              <Card
                sx={{
                  width: 350,
                  height: 360,
                  background: 'background',
                  alignItems: 'center'
                }}
                onClick={() => append({})}
              >
                <Box
                  sx={{
                    margin: '15px auto',
                    border: '1px solid grey',
                    borderStyle: 'dashed',
                    borderRadius: '12px',
                    width: 325,
                    height: 330
                  }}
                >
                  <Box marginTop={'35%'}>
                    <>
                      <AddPhotoAlternateRounded
                        color="action"
                        sx={{
                          fontSize: '100px',
                          padding: '-50px'
                        }}
                      />
                    </>
                  </Box>
                </Box>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImagesForm;
