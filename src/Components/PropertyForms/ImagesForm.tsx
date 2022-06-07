import { useDispatch } from 'Hooks/Redux';
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { addNewRealEstate } from 'Services/Dashboard/Dashboard.actions';
import convertToBase64 from 'Utils/convertFileToBase64';

const ImagesForm = () => {
  const dispatch = useDispatch();

  const { control, register, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'test' });
  const [baseImage, setBaseImage] = useState('');

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64: any = await convertToBase64(file);
    // console.log(base64);
    setBaseImage(base64);
  };

  return (
    <form
      onSubmit={handleSubmit(async (values: any) => {
        const base: any = await convertToBase64(values.images[0].value[0]);
        console.log(values.images[0].value[0]);
        setBaseImage(base);
      })}
    >
      <button type="button" onClick={() => append({ test: 'test' })}>
        Add
      </button>
      {fields.map((field, index) => (
        <input
          key={field.id}
          {...register(`images.${index}.value`)}
          type="file"
          // onChange={(e) => {
          //   uploadImage(e);
          // }}
        />
      ))}
      <img src={baseImage} height="200px" width="200px" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImagesForm;
