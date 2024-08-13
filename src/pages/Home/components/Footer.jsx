import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import ContactUs from '@/assets/images/contact-us.jpg';

const logoStyle = {
  height: '60px',
  wigth: 'auto',
  paddingLeft: '16px',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="/">Cortex&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        pb: { xs: 12, sm: 14 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img src="/logo.svg" style={logoStyle} alt="logo of cortex" />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Cortex AI
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Hi，我是你的全能 AI 助手。
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ width: '100px' }}
            >
              <img src={ContactUs} alt="联系我们" style={{ width: '100%' }} />
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            产品
          </Typography>
          <Link color="text.secondary" href="#">
            介绍
          </Link>

          <Link color="text.secondary" href="#">
            功能
          </Link>
          <Link color="text.secondary" href="#">
            大家的评价
          </Link>
          <Link color="text.secondary" href="#">
            开通会员
          </Link>
          <Link color="text.secondary" href="#">
            你想了解的
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            特色功能
          </Typography>
          <Link color="text.secondary" href="#">
            AI 编码大师
          </Link>
          <Link color="text.secondary" href="#">
            智能语音助手
          </Link>
          <Link color="text.secondary" href="#">
            AI 图像智能
          </Link>
          <Link color="text.secondary" href="#">
            文件处理
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            了解更多
          </Typography>
          <Link color="text.secondary" href="#">
            加入我们
          </Link>
          <Link color="text.secondary" href="#">
            插件扩展
          </Link>
          <Link color="text.secondary" href="#">
            隐私条款
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          {/* <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link> */}
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/Odin-7/cortex-ai"
            target="_blank"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/Odin-7/cortex-ai"
            target="_blank"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
