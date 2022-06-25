import { Button, styled } from '@mui/material';
import { IButton } from 'Types/Search/Search.types';

export const CustomButton = styled(Button)<IButton>(
  ({ buttonbackground, ...props }) => ({
    background: buttonbackground ? props.theme.palette.secondary.main : 0,
    margin: '0px',
    padding: '35px',
    color: buttonbackground ? 'white' : props.theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      background: buttonbackground ? props.theme.palette.secondary.dark : 0,
      padding: 'none',
      boxShadow: 'none'
    }
  })
);