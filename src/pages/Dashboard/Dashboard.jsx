import React from 'react';
import './Dashboard.scss';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import getLPTheme from '@/theme/getLPTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Bot from './components/Bot';

const Dashboard = () => {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <div className="dashboard-page">
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <Bot />
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;
