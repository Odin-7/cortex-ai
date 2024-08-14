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
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import ToggleColorMode from './ToggleColorMode';

const logoStyle = {
  height: '25px',
  with: 'auto',
  cursor: 'pointer',
  padding: '0 10px',
};

function HeaderBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={(theme) => ({
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          pt: { xs: 0.2, md: 0.8 },
          backdropFilter: 'blur(24px)',
        })}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              maxHeight: 40,
              pr: 1,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
              onClick={() => scrollToSection('first-page')}
            >
              <img src="/logo.svg" style={logoStyle} alt="logo of cortex" />
              <Typography variant="subtitle2" color="text.primary">
                <span className="cortex-font">Cortex AI</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <span className="cortex-font">介绍</span>
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => scrollToSection('three')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <span className="cortex-font">功能</span>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('four')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <span className="cortex-font">评价</span>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('five')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <span className="cortex-font">开通</span>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    <span className="cortex-font">了解</span>
                  </Typography>
                </MenuItem>
              </Box>
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              {/* <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                登录
              </Button> */}
            </Box>
            {/* 移动端 */}
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <SegmentOutlinedIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  {/* <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box> */}
                  <MenuItem onClick={() => scrollToSection('features')}>
                    <span className="cortex-font">介绍</span>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('four')}>
                    <span className="cortex-font">评价</span>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('three')}>
                    <span className="cortex-font">功能</span>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('five')}>
                    <span className="cortex-font">开通</span>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>
                    <span className="cortex-font">了解</span>
                  </MenuItem>
                  <Divider />
                  {/* <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem> */}
                  <MenuItem>
                    <Button
                      component="a"
                      target="_blank"
                      sx={{
                        width: '100%',
                        borderWidth: 0,
                        color: '#ffffff',
                        background:
                          'linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)',
                      }}
                    >
                      <span className="cortex-font">登 录</span>
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default HeaderBar;
