import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NowUse() {
  const navigate = useNavigate();

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 3, sm: 5 },
        pb: { xs: 8, sm: 10 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4">
          立即体验 Cortex AI 的强大功能
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.400', mt: 1 }}>
          免费解锁AI编码大师、AI编码无需人类插手
        </Typography>
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/dashboard')}
        >
          启用 AI 原力
        </Button>
      </Box>
    </Container>
  );
}
