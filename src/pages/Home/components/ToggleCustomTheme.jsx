import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const ToggleCustomTheme = ({ showCustomTheme, toggleCustomTheme }) => {
  return (
    <Box
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   width: '100dvw',
    //   position: 'fixed',
    //   bottom: 24,
    // }}
    >
      {/* <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup> */}
      <Button
        variant="text"
        onClick={toggleCustomTheme}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {showCustomTheme ? (
          <AutoAwesomeRoundedIcon fontSize="small" />
        ) : (
          <AutoAwesomeOutlinedIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
};

export default ToggleCustomTheme;
