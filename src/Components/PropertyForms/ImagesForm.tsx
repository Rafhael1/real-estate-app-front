import React, { useEffect, useState } from 'react';
import { useFieldArray, useWatch } from 'react-hook-form';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { InputFileField } from 'Components';
import { CameraAltRounded } from '@mui/icons-material';
import ImagePlaceHolder from 'Assets/Images/image_placeholder.jpg';

import convertToBase64 from 'Utils/convertFileToBase64';
import useMediaQuery from 'Utils/Hooks/useMediaQuery';

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
    <img
      src={imageBase64 || ImagePlaceHolder}
      style={{ borderRadius: '12px' }}
      height="200px"
      width="320px"
    />
  );
};

const ImagesForm = ({ control }) => {
  const { fields } = useFieldArray({
    control,
    name: 'images'
  });
  const watchImages = useWatch({ control, name: 'images' });
  const { isMobile } = useMediaQuery();

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
                    image={
                      watchImages &&
                      watchImages[index]?.value &&
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
        </Grid>
      </Container>
    </Box>
  );
};

export default ImagesForm;
