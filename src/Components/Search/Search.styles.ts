import {
  ButtonGroup as MuiButtonGroup,
  Button,
  styled,
  Accordion
} from '@mui/material';
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

export const ButtonGroup = styled(MuiButtonGroup)({
  backgroundColor: 'white',
  borderRadius: '12px'
});

export const StyledAccordion = styled(Accordion)(() => ({
  '& .MuiPaper-root	': {
    borderRadius: '50px'
  }
}));
