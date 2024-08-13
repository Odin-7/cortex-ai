import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import StarRing from '@/components/StarRing';

export default function Bot() {
  const navigate = useNavigate();

  return (
    <Box
      id="bot-page"
      sx={(theme) => ({
        width: '100%',
        height: '100vh',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 33%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        聊天
      </Container>
      {/* 星环 */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          bottom: { xs: '-80px', sm: 0 },
          zIndex: -1,
        }}
      >
        <StarRing />
      </Box>
    </Box>
  );
}
