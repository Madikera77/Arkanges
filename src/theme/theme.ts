import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // doré
      light: '#FFD700', // lumière chaude
      dark: '#B8941F',
      contrastText: '#0A0E27',
    },
    secondary: {
      main: '#4A148C', // violet profond
      light: '#6A1B9A',
      dark: '#38006B',
      contrastText: '#F5F5F5',
    },
    background: {
      default: '#0A0E27', // bg-primary
      paper: '#1A1F3A', // bg-secondary
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#E0E0E0',
      disabled: '#BDBDBD',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 700,
      fontSize: '4rem',
    },
    h2: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 31, 58, 0.8)',
          borderRadius: '8px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(212, 175, 55, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(212, 175, 55, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D4AF37',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#E0E0E0',
            '&.Mui-focused': {
              color: '#D4AF37',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: 600,
          borderRadius: '4px',
        },
      },
    },
  },
})

export default theme
