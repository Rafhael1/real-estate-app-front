import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

interface ITypographyProps {
  hideBorderRight?: boolean;
}

export const CustomTypography = styled(Typography)<ITypographyProps>(
  ({ hideBorderRight }) => ({
    borderRight: hideBorderRight ? 'none' : '1px solid',
    borderRightColor: !hideBorderRight ? 'neutral.light' : 'none',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center'
  })
);
