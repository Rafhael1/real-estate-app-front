import { Button, styled } from '@mui/material';

interface IButton {
	buttonbackground?: boolean;
}

export const CustomButton = styled(Button)<IButton>((props) => ({
	background: props.buttonbackground ? props.theme.palette.secondary.main : 0,
	margin: '0px',
	padding: '35px',
	color: props.buttonbackground ? 'white' : props.theme.palette.primary.main,
	textTransform: 'none',
	'&:hover': {
		background: props.buttonbackground ? props.theme.palette.secondary.dark : 0,
		padding: 'none',
		boxShadow: 'none'
	}
}));
