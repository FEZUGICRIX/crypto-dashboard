import {
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Typography,
  Button,
  Dialog,
  Drawer,
} from '@mui/material';
import ContrastIcon from '@mui/icons-material/Contrast';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

import CryptoSelect from '../CryptoSelect';
import Modal from '../Modal';
import DrawerContent from '../DrawerContent';

const Header = ({ setDarkMode, darkMode }) => {
  const [dialog, setDialog] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [coin, setCoin] = useState(null);

  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Dashboard</Typography>
          <IconButton color="inherit">
            <DonutSmallIcon />
          </IconButton>
        </Box>
        <Box display="flex" gap={1} sx={{ height: 45 }}>
          <Button onClick={() => setDarkMode(!darkMode)}>
            <IconButton>
              <ContrastIcon />
            </IconButton>
          </Button>
          <CryptoSelect
            setDialog={setDialog}
            coin={coin}
            setCoin={setCoin}
          />

          <Button
            color="inherit"
            variant="outlined"
            sx={{ width: '100%' }}
            onClick={() => setDrawer(true)}
          >
            Add Asset
          </Button>
        </Box>
      </Toolbar>

      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        anchor="right"
      >
        <DrawerContent />
      </Drawer>

      <Dialog
        open={dialog}
        maxWidth={'sm'}
        // keepMounted
        onClose={() => setDialog(false)}
      >
        {coin && <Modal coin={coin} setDialog={setDialog} />}
      </Dialog>
    </AppBar>
  );
};

export default Header;
