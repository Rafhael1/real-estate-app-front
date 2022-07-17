import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

interface ITypographyProps {
  borderRight?: boolean;
}

export const CustomTypography = styled(Typography)<ITypographyProps>(
  ({ borderRight }) => ({
    borderRight: '1px solid',
    borderRightColor: borderRight ? 'neutral.light' : 'none',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center'
  })
);
