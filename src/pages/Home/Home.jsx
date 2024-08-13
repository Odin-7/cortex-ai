import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import First from './components/First';
import Second from './components/Second';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import NowUse from './components/NowUse';
import Footer from './components/Footer';

import getLPTheme from '@/theme/getLPTheme';
import ToggleCustomTheme from './components/ToggleCustomTheme';
import './Home.scss';

// ToggleCustomTheme.propTypes = {
//   showCustomTheme: PropTypes.shape({
//     valueOf: PropTypes.func.isRequired,
//   }).isRequired,
//   toggleCustomTheme: PropTypes.func.isRequired,
// };

const Home = () => {
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
    <div className="home-page">
      <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
        <CssBaseline />
        <HeaderBar mode={mode} toggleColorMode={toggleColorMode} />
        <First />
        <Box sx={{ bgcolor: 'background.default' }}>
          {/* <Divider /> */}
          <Second />

          <LogoCollection />
          {/* <Features /> */}
          <Highlights />
          <Testimonials />
          <Pricing />
          <FAQ />
          <NowUse />
          <Divider />
          <Footer />
        </Box>
        {/* <FooterBar
          mode={mode}
          toggleColorMode={toggleColorMode}
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        /> */}
        {/* <ToggleCustomTheme
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        /> */}
      </ThemeProvider>
    </div>
  );
};

export default Home;
