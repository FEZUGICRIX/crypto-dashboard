import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
      paper: '#fff',
    },
    primary: {
      main: '#692FFF',
    },
    secondary: {
      main: '#ebf1f1',
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    body1: {
      color: '#fff',
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: 'hsl(210, 14%, 7%)',
      paper: '#14212A',
    },
    info: {
      contrastText: 'rgba(0, 0, 0, 0.87)',
      dark: '#0288d1',
      light: '#4fc3f7',
      main: '#29b6f6',
    },

    primary: {
      main: '#f1c40f',
    },
    secondary: {
      main: '#34495e',
    },
  },
});
