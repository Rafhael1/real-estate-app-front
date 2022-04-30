import {
  Card,
  ButtonGroup as MuiButtonGroup,
  Button,
  styled
} from '@mui/material';

export const CustomButton = styled(Button)(({ theme }) => ({
  background: 'none',
  margin: '0px',
  padding: '35px',
  color: theme.palette.primary.main,
  textTransform: 'none',
  '&:hover': {
    background: 'none',
    padding: 'none',
    boxShadow: 'none',
    color: theme.palette.primary.dark
  }
}));

export const ButtonGroup = styled(MuiButtonGroup)({
  backgroundColor: 'white',
  borderRadius: '25px'
});
