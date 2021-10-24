import React from "react"

import { Form, Field, reduxForm } from "redux-form"
import { useDispatch } from "react-redux"
import { UserType } from "./types"

import { login } from "./redux/actions"
import { Stack, Container, Button } from "@mui/material"

import renderTextField from "../../../../components/fields/inputField"
import renderCheckboxField from "../../../../components/fields/checkboxField"

// import Navbar from "pages/Common/Navbar/index"

import useStyles from "./styles"

const Login = ({ handleSubmit }) => {
  const dispatch = useDispatch()

  const classes = useStyles()

  return (
    <Container>
      <div className={classes.loginContainer}>
        <Stack>
          <Form
            onSubmit={handleSubmit((values: UserType) => dispatch(login(values)))}
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
            <Button 
              type="submit"
            >
    Sign In
            </Button>
          </Form>
        </Stack>
      </div>
    </Container>
  )
}

export default reduxForm({
  form: "LoginForm",
})(Login)
