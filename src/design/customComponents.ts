const background = '#E0E1DD'

export default {
  MuiTypography: {
    styleOverrides: {
      root: {
        color: 'primary'
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: background,
        minHeight: '100vh'
      }
    }
  },
  MuiButton: {
    defaultProps: {
     variant: 'contained',
    },
    styleOverrides: {
      root: {
        fontSize: '1rem',
        borderRadius: '5px',
        marginTop: '10px',
        marginBottom: '10px',
        display: 'flex'
      }
    }
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined'
    },
    styleOverrides: {
      root: {
        margin: '5px'
      }
    }
  }
}
