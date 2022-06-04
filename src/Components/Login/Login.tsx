import React from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Dialog, DialogTitle, DialogContent } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { SignUpLink } from './Login.styles';
import { TextField, CheckboxField } from 'Components';
import { useDispatch, useSelector } from 'Hooks/Redux';
import { login } from 'Services/Auth/Auth.actions';
import { UserType, AuthProps } from 'Types/Auth/Auth.types';

const Login = ({ isModalOpen, handleModalOpen }: AuthProps) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.Auth);
  const { control, handleSubmit } = useForm();

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => handleModalOpen('login')}
      transitionDuration={1}
      PaperProps={{ sx: { borderRadius: '25px', height: '450px' } }}
    >
      <DialogTitle sx={{ alignSelf: 'center', fontStyle: 'bold' }}>
        Login
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit(async (values: UserType) => {
            await dispatch(login(values));
            handleModalOpen('login');
          })}
        >
          <Stack direction="column" alignItems="center" spacing={0}>
            <TextField
              required
              name="email"
              color="primary"
              label="Email"
              type="email"
              autoFocus
              control={control}
            />
            <TextField
              required
              name="password"
              color="primary"
              label="Password"
              type="password"
              control={control}
            />
            <CheckboxField
              name="rememberMe"
              type="checkbox"
              label="Remember Me"
              color="secondary"
              control={control}
            />
            <LoadingButton
              loading={authState.isLoading}
              sx={{ width: '200px' }}
              type="submit"
            >
              Login
            </LoadingButton>
            <SignUpLink
              onClick={() => {
                handleModalOpen('register');
              }}
              variant="body1"
              color="textSecondary"
            >
              {"Don't have an account yet? "}
              <b>Sign Up</b>
            </SignUpLink>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
