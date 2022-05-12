import { ButtonGroup as MuiButtonGroup, Button, styled } from '@mui/material';
import { IButton } from './Search.types';

export const CustomButton = styled(Button)<IButton>(
  ({ buttonbackground, ...props }) => ({
    // @ts-expect-error
    background: buttonbackground ? props.theme.palette.yellow.main : 0,
    margin: '0px',
    padding: '35px',
    color: buttonbackground ? 'white' : props.theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      // @ts-expect-error
      background: buttonbackground ? props.theme.palette.yellow.dark : 0,
      padding: 'none',
      boxShadow: 'none',
      color: buttonbackground
        ? props.theme.palette.primary.light
        : props.theme.palette.text.primary
    }
  })
);

export const ButtonGroup = styled(MuiButtonGroup)({
  backgroundColor: 'white',
  borderRadius: '25px'
});
