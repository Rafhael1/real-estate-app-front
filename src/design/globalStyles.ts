/** @format */

import { createTheme } from '@mui/material/styles'
import { enUS } from '@mui/material/locale'

import { palette } from './colors'
import customComponents from './customComponents'

declare module '@mui/material/styles'

const theme = createTheme(
  {
    palette,
    typography: {
      fontFamily: 'Quicksand'
    },
    // @ts-ignore
    customComponents
  },
  enUS
)

export default theme
