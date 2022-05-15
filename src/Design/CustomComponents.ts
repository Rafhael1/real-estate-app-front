const background = '#F5F5F5';

export default {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: background,
        minHeight: '100vh',
        fontFamily: 'Quicksand'
      }
    }
  },
  // Inputs
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    },
    variants: [
      {
        props: { color: 'neutral' }
      }
    ],
    styleOverrides: {
      root: {
        fontSize: '1rem',
        borderRadius: '25px',
        marginTop: '10px',
        marginBottom: '10px',
        height: '50px',
        padding: '15px 25px',
        boxShadow: 'none',
        fontWeight: 900
      }
    }
  },
  MuiLoadingButton: {
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
        padding: '15px 25px',
        boxShadow: 'none',
        fontWeight: 900,
        color: 'white'
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        width: '100%',
        borderRadius: '25px',
        height: '60px',
        alignItems: 'center'
      },
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 60px #e6e9ed inset !important',
          WebkitBackgroundClip: 'text'
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
  // Layout
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backgroundColor: '#1B2738'
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
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        margin: '0 auto'
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeith: 900,
        fontSize: '1.9rem'
      }
    }
  }
};
