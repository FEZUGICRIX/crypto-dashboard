import {
  Box,
  CircularProgress,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';

import { useCrypto } from './hooks/useCrypto';
import { lightTheme, darkTheme } from './themes';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Sider from './components/layout/Sider';

const App = () => {
  const { loading } = useCrypto();
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Box display="flex">
        <Sider />
        <Content />
      </Box>
    </ThemeProvider>
  );
};

export default App;
