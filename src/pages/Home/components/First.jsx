import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';

// import GptLight from '@/assets/images/gpt-icon-light.svg';
import GptDark from '@/assets/images/chatgpt.svg';
import Claude from '@/assets/images/claude.svg';
import Gemini from '@/assets/images/gemini.svg';
import Wenxin from '@/assets/images/wenxin.svg';
import Tongyi from '@/assets/images/tongyi.svg';

const iconStyle = {
  height: '20px',
  with: 'auto',
  cursor: 'pointer',
  paddingLeft: '4px',
  paddingRight: '4px',
};
export default function First() {
  return (
    <Box
      id="first-page"
      sx={(theme) => ({
        width: '100%',
        height: '100vh',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
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
        <Stack
          spacing={1}
          useFlexGap
          sx={{
            width: { xs: '100%', sm: '70%' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            {/* 智脑&nbsp; */}
            <Typography
              component="span"
              variant="h1"
              className="first-page-mask"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'primary.light',
                height: { xs: '150px', sm: '200px' },
              }}
            >
              CortexAI
              {/* <div className="first-page-mask"></div> */}
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            一句话，为您搞定一切。
          </Typography>
          {/* <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" color="primary">
              点击开启
            </Button>
          </Stack> */}
          {/* <Typography
            variant="caption"
            textAlign="center"
            sx={{
              // opacity: 0.8,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0',
              lineHeight: '2rem',
            }}
          >
            轻松访问
            <img src={GptDark} style={iconStyle} alt="chatgpt" /> GPT-4o、
            <img src={Gemini} style={iconStyle} alt="gemini" /> Gemini 1.5、
            <img src={Claude} style={iconStyle} alt="claude" /> Claude 3.5、
            <img src={Wenxin} style={iconStyle} alt="wenxin" /> 文心一言、
            <img src={Tongyi} style={iconStyle} alt="tongyi" /> 通义千问 等多个
            AI 模型！
          </Typography> */}
        </Stack>
      </Container>
    </Box>
  );
}
