import React from 'react'
import { useDispatch } from 'react-redux'

import { Form, Field, FieldArray, reduxForm } from 'redux-form'

import { addNewRealEstate } from '../redux/actions'

import renderFileInput from '../../../../components/fields/inputField'

const renderImages = ({ fields }: any) => (
  <>
    <button type="button" onClick={() => fields.push()}>
	Add Hobby
    </button>
    {
      fields.map((image, index) => (
        <div key={index}>
          <Field name={`${image}`} component={renderFileInput}  />
        </div>
      ))
    }
  </>
)

const NewPropertyForm = ({ handleSubmit }: any) => {
  const dispatch = useDispatch()

  return (
    <>
      <Form onSubmit={handleSubmit((values: any) => dispatch(addNewRealEstate(values)))} >
        <Field name="title" component="input"  type="text" />
        <Field name="description" component="input"  type="text" />
        <Field name="squareMeter" component="input"  type="number" />
        <Field name="bathrooms" component="input"  type="number" />
        <Field name="bedrooms" component="input"  type="number" />
        <Field name="address" component="input"  type="text" />
        <Field name="country" component="input"  type="text" />
        <Field name="price" component="input"  type="text" />
        <Field name="status" component="input"  type="text" />
        <FieldArray name="images" component={renderImages} />
        <button type="submit" >Add New Property</button>
      </Form>
    </>
  )
}

export default reduxForm({
  form: 'NewPropertyFormRedux',
})(NewPropertyForm)