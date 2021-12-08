import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Field, FieldArray, reduxForm } from 'redux-form'
import { Stack, Container, Button } from '@mui/material'
import { IRFrealEstates } from '../types'
import { addNewRealEstate } from '../redux/actions'

import renderFileInput from '../../../../components/fields/inputFileField'
import renderInput from '../../../../components/fields/inputField'

const renderImages = ({ fields }: any) => (
  <>
    <button type="button" onClick={() => fields.push()}>
      Add Image
    </button>
    {fields.map((image: any, index: number) => (
      <div key={index}>
        <Field name={`${image}`} component={renderFileInput} />
      </div>
    ))}
  </>
)

const NewPropertyForm = ({ handleSubmit }: any) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Stack>
        <Form
          onSubmit={handleSubmit((values: IRFrealEstates) =>
            dispatch(addNewRealEstate(values))
          )}
        >
          <Field name="title" component={renderInput} type="text" />
          <Field name="description" component={renderInput} type="text" />
          <Field name="squareMeter" component={renderInput} type="number" />
          <Field name="bathrooms" component={renderInput} type="number" />
          <Field name="bedrooms" component={renderInput} type="number" />
          <Field name="address" component={renderInput} type="text" />
          <Field name="country" component={renderInput} type="text" />
          <Field name="price" component={renderInput} type="text" />
          <Field name="status" component={renderInput} type="text" />
          <FieldArray name="images" component={renderImages} />
          <Button type="submit">Add New Property</Button>
        </Form>
      </Stack>
    </Container>
  )
}

export default reduxForm({
  form: 'NewPropertyFormRedux'
})(NewPropertyForm)
