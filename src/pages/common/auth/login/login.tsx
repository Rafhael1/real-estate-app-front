import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { Stack, Container, Button } from '@mui/material'
import { UserType } from './login.types'
import { useAppDispatch } from '../../../../redux/hooks'
import { login } from './login.actions'

import renderTextField from '../../../../components/fields/inputField'
import renderCheckboxField from '../../../../components/fields/checkboxField'

// import Navbar from "pages/Common/Navbar/index"

import useStyles from './login.styles'

const Login = ({ handleSubmit }: any) => {
  const dispatch = useAppDispatch()

  const classes = useStyles()

  return (
    <Container>
      <div className={classes.loginContainer}>
        <Stack>
          <Form
            onSubmit={handleSubmit((values: UserType) =>
              dispatch(login(values))
            )}
          >
            <Field
              name="email"
              color="primary"
              label="Email"
              type="email"
              component={renderTextField}
            />
            <Field
              name="password"
              color="primary"
              label="Password"
              type="password"
              component={renderTextField}
            />
            <Field
              name="rememberMe"
              type="checkbox"
              label="Remember Me"
              color="secondary"
              component={renderCheckboxField}
            />
            <Button type="submit">
              Sign In
            </Button>
          </Form>
        </Stack>
      </div>
    </Container>
  )
}

export default reduxForm({
  form: 'LoginForm'
})(Login)
