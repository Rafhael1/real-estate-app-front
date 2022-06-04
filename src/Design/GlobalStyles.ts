import { createTheme } from '@mui/material/styles';
import { enUS } from '@mui/material/locale';

import { palette } from './Colors';
import customComponents from './CustomComponents';

const theme = createTheme(
  {
    palette,
    typography: {
      fontFamily: 'Quicksand'
    },
    shape: {
      borderRadius: 12
    },
    // @ts-ignore
    components: customComponents
  },
  enUS
);

export default theme;
