import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { Stack, Box, Modal, Button } from '@mui/material';
import { UserType } from './Login.types';
import { useDispatch } from 'Redux/Hooks';
import { login } from './Login.actions';

import renderTextField from '../../../Components/Fields/InputField';
import renderCheckboxField from '../../../Components/Fields/CheckboxField';

import useStyles from './Login.styles';

const Login = ({ handleSubmit }: any) => {
  const dispatch = useDispatch();

  const styles = useStyles();

  return (
    <Modal open={true} className={styles.boxModal}>
      <Box>
        <Form
          onSubmit={handleSubmit((values: UserType) => dispatch(login(values)))}
        >
          <Stack direction="column" alignItems="center" spacing={0}>
            <Field
              name="email"
              color="primary"
              label="Email"
              type="email"
              autoFocus
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
            <Button type="submit">Login</Button>
          </Stack>
        </Form>
      </Box>
    </Modal>
  );
};

export default reduxForm({
  form: 'LoginForm'
})(Login);
