import * as React from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import ToggleCustomTheme from './ToggleCustomTheme';
import '@/styles/common.scss';

import Coin from '@/assets/images/coin.svg';

const logoStyle = {
  height: '25px',
  with: 'auto',
  cursor: 'pointer',
  padding: '0 10px',
};

function FooterBar({
  mode,
  toggleColorMode,
  showCustomTheme,
  toggleCustomTheme,
}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          top: 'auto',
          bottom: 0,
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              maxHeight: 40,
            })}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <ToggleCustomTheme
                showCustomTheme={showCustomTheme}
                toggleCustomTheme={toggleCustomTheme}
              />
              <Divider variant="middle" orientation="vertical" flexItem />
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Divider variant="middle" orientation="vertical" flexItem />
              <Typography variant="body2" color="text.primary" sx={{ ml: 1 }}>
                未登录
              </Typography>
              <img
                className="bounce-rotate-fade-in"
                src={Coin}
                style={{ height: '22px', with: 'auto', cursor: 'pointer' }}
                alt="Coin of cortex"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default FooterBar;
