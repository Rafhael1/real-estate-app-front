import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'Hooks/Redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { TextField } from 'Components';
import { Box, Button } from '@mui/material';

const PropertyForm = ({ control }) => {
  return (
    <Box>
      <TextField
        name="title"
        placeholder="Beach house by the black sea"
        label={'Post title'}
        control={control}
      />
      <TextField
        name="description"
        placeholder="Description"
        label="Description"
        control={control}
      />
      <TextField
        name="squareMeter"
        label="Square meters"
        placeholder="55"
        control={control}
      />
      <TextField
        name="bathrooms"
        placeholder="3"
        label="Bathrooms"
        control={control}
      />
      <TextField
        name="bedrooms"
        placeholder="4"
        label="Bedrooms"
        control={control}
      />
      <TextField
        name="address"
        placeholder="Address"
        label="Address"
        control={control}
      />
      <TextField
        name="country"
        placeholder="Bulgaria"
        label="Country"
        control={control}
      />
      <TextField
        name="price"
        placeholder="Price"
        label="Price"
        control={control}
      />
      <TextField
        name="status"
        placeholder="For sale"
        label="Status"
        control={control}
      />
    </Box>
  );
};

export default PropertyForm;

// import React from 'react';
// import { useDispatch } from 'Hooks/Redux';
// import { Form, Field, FieldArray, reduxForm } from 'redux-form';
// import { Stack, Container, Button } from '@mui/material';
// import { IRFrealEstates } from 'Types/Dashboard/Dashboard.types';
// import { addNewRealEstate } from 'Services/Dashboard/Dashboard.actions';

// import renderFileInput from '../Fields/InputFileField';
// import renderInput from '../Fields/InputField';

// const renderImages = ({ fields }: any) => (
//   <>
//     <button type="button" onClick={() => fields.push()}>
//       Add Image
//     </button>
//     {fields.map((image: any, index: number) => (
//       <div key={index}>
//         <Field name={image} component={renderFileInput} />
//       </div>
//     ))}
//   </>
// );

// const PropertyForm = ({ handleSubmit }: any) => {
//   const dispatch = useDispatch();

//   return (
//     <Container>
//       <Stack>
//         <Form
//           onSubmit={handleSubmit((values: IRFrealEstates) =>
//             dispatch(addNewRealEstate(values))
//           )}
//         >
//           <Field name="title" component={renderInput} type="text" />
//           <Field name="description" component={renderInput} type="text" />
//           <Field name="squareMeter" component={renderInput} type="number" />
//           <Field name="bathrooms" component={renderInput} type="number" />
//           <Field name="bedrooms" component={renderInput} type="number" />
//           <Field name="address" component={renderInput} type="text" />
//           <Field name="country" component={renderInput} type="text" />
//           <Field name="price" component={renderInput} type="text" />
//           <Field name="status" component={renderInput} type="text" />
//           <FieldArray name="images" component={renderImages} />
//           <Button type="submit">Add New Property</Button>
//         </Form>
//       </Stack>
//     </Container>
//   );
// };

// export default reduxForm({
//   form: 'PropertyFormRedux'
// })(PropertyForm);
