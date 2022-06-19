import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'Hooks/Redux';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';

import { Button } from '@mui/material';
import { InputFileField } from 'Components';
import { CameraAltRounded } from '@mui/icons-material';

import { addNewRealEstate } from 'Services/Dashboard/Dashboard.actions';

import compressBase64Image from 'Utils/compressBase64Image';
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

  return <img src={imageBase64 || ''} height="200px" width="200px" />;
};

const ImagesForm = ({ control }) => {
  const dispatch = useDispatch();
  const { register } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images'
  });
  const watchImages = useWatch({ control, name: 'images' });

  return (
    <>
      <Button type="button" onClick={() => append({})}>
        Add
      </Button>
      {fields.map((field, index) => (
        <span key={field.id}>
          <p>
            {watchImages && watchImages[index]?.value
              ? watchImages[index]?.value[0].name
              : ''}
          </p>
          {watchImages && watchImages[index]?.value && (
            <Image image={watchImages[index]?.value[0]} />
          )}
          <InputFileField
            name={`images.${index}.value`}
            control={control}
            endIcon={<CameraAltRounded />}
          />
          <Button
            onClick={() => {
              remove(index);
            }}
          >
            Remove
          </Button>
        </span>
      ))}
    </>
  );
};

export default ImagesForm;
