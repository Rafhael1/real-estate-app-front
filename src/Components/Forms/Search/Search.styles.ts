import { Card, Box, Button, styled } from '@mui/material';
import { CustomBoxProps } from './Search.types';

export const SearchContainer = styled(Card)({
  width: 'auto',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const CustomBox = styled(Box)((props: CustomBoxProps) => ({
  padding: '10px',
  borderRight: !props.hasBorderLeft ? '1px solid #ccc' : 'none'
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  background: 'none',
  color: theme.palette.primary.main,
  textTransform: 'none',
  '&:hover': {
    background: 'none',
    padding: 'none',
    boxShadow: 'none',
    color: theme.palette.primary.dark
  }
}));
