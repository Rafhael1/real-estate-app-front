import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { Button } from '@mui/material'
import { UserType } from './types'
import { useAppDispatch } from '../../../../redux/hooks'

import renderTextField from '../../../../components/fields/inputField'

import { register } from './redux/actions'

const Register = ({ handleSubmit }: any) => {
  const dispatch = useAppDispatch()

  return (
    <Form
      onSubmit={handleSubmit((values: UserType) => dispatch(register(values)))}
    >
      <Field
        name="name"
        variant="outlined"
        color="primary"
        label="Name"
        type="text"
        component={renderTextField}
      />
      <Field
        name="email"
        variant="outlined"
        color="primary"
        label="Email"
        type="email"
        component={renderTextField}
      />
      <Field
        name="password"
        variant="outlined"
        color="primary"
        label="Password"
        type="password"
        component={renderTextField}
      />
      <Field
        component={Button}
        type="submit"
        props={{
          variant: 'contained',
          color: 'primary'
        }}
      >
        Sign Up
      </Field>
    </Form>
  )
}

export default reduxForm({
  form: 'RegisterForm'
})(Register)
