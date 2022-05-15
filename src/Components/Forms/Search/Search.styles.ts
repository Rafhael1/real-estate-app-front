import { ButtonGroup as MuiButtonGroup, Button, styled } from '@mui/material';
import { IButton } from './Search.types';

export const CustomButton = styled(Button)<IButton>(
  ({ buttonbackground, ...props }) => ({
    background: buttonbackground ? props.theme.palette.warning.main : 0,
    margin: '0px',
    padding: '35px',
    color: buttonbackground ? 'white' : props.theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      background: buttonbackground ? props.theme.palette.warning.dark : 0,
      padding: 'none',
      boxShadow: 'none'
    }
  })
);

export const ButtonGroup = styled(MuiButtonGroup)({
  backgroundColor: 'white',
  borderRadius: '25px'
});
