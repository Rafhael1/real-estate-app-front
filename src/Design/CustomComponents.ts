const background = '#F5F5F5';

export default {
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
      variant: 'contained'
    },
    styleOverrides: {
      root: {
        fontSize: '1rem',
        borderRadius: '25px',
        marginTop: '10px',
        marginBottom: '10px',
        height: '50px',
        padding: '15px 55px',
        boxShadow: 'none'
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        width: '100%',
        borderRadius: '25px',
        height: '60px'
      },
      input: {
        '&:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 60px #e6e9ed inset !important',
          '-webkit-background-clip': 'text'
        }
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        width: '300px',
        margin: '5px',
        height: '60px',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        borderRadius: '25px',
        [`& fieldset`]: {
          border: 0,
          borderRadius: '25px'
        }
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none'
      }
    }
  },
  MuiCard: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        borderRadius: '25px'
      }
    }
  }
};
