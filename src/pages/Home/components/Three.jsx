import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import FormatOverlineRoundedIcon from '@mui/icons-material/FormatOverlineRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import GoogleIcon from '@mui/icons-material/Google';

const items = [
  {
    icon: <StreamRoundedIcon />,
    title: '多平台可用',
    description:
      '无论您使用的是浏览器、桌面还是手机，都可以与您喜爱的助手进行聊天。',
  },
  {
    icon: <GoogleIcon />,
    title: '浏览器小帮手',
    description: '常驻在浏览器侧边栏，回答问题、总结或快速翻译。',
  },
  {
    icon: <ElectricBoltRoundedIcon />,
    title: '速问速答',
    description:
      '当您想要快速获取答案时，只需选中文字，输入您想问的问题，可以快速问答。',
  },
  {
    icon: <GTranslateRoundedIcon />,
    title: '划词翻译',
    description: '选中想要的单词，一键翻译，支持复制到剪贴板。',
  },
  {
    icon: <WebhookRoundedIcon />,
    title: '多模型生成',
    description: '一处聊天，即可同时使用多种模型生成，选择最佳答案。',
  },
  {
    icon: <PictureAsPdfRoundedIcon />,
    title: '一键将网页转换为PDF',
    description: '将网页一键转换为PDF，支持二维码分享。',
  },
];

export default function Three() {
  return (
    <Box
      id="three"
      sx={{
        pt: { xs: 3, sm: 5 },
        pb: { xs: 8, sm: 10 },
        // color: 'white',
        // bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
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
            <span className="cortex-font">随处可用，随时可用</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400', mt: 1 }}>
            你需要的功能，我们都有
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  // border: '1px solid',
                  // borderColor: 'grey.800',
                  // background: 'transparent',
                  // backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
