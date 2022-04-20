import { createTheme } from '@mui/material/styles';
import { enUS } from '@mui/material/locale';

import { palette } from './Colors';
import customComponents from './CustomComponents';

declare module '@mui/material/styles';

const theme = createTheme(
  {
    palette,
    typography: {
      fontFamily: 'Quicksand'
    },
    // @ts-ignore
    components: customComponents
  },
  enUS
);

export default theme;
