import { ButtonGroup as MuiButtonGroup, Button, styled } from '@mui/material';
import { IButton } from './Search.types';

export const CustomButton = styled(Button)<IButton>((props) => ({
  background: props.addBackground ? props.theme.palette.primary.main : 'none',
  margin: '0px',
  padding: '35px',
  color: props.addBackground ? 'white' : props.theme.palette.primary.main,
  textTransform: 'none',
  '&:hover': {
    background: props.addBackground ? props.theme.palette.primary.main : 'none',
    padding: 'none',
    boxShadow: 'none',
    color: props.addBackground
      ? props.theme.palette.primary.light
      : props.theme.palette.text.primary
  }
}));

export const ButtonGroup = styled(MuiButtonGroup)({
  backgroundColor: 'white',
  borderRadius: '25px'
});
