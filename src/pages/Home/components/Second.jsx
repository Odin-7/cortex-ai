import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@mui/system';

import LightVideo from '@/assets/video/light-video.mp4';
import DarkVideo from '@/assets/video/dark-video.mp4';
import LightVideoSource from '@/assets/images/light-video-source.png';
import DarkVideoSource from '@/assets/images/dark-video-source.png';

export default function First() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();
  const videoUrl = theme.palette.mode === 'light' ? LightVideo : DarkVideo;

  return (
    <Box
      id="features"
      sx={(theme) => ({
        width: '100%',
        // backgroundImage:
        //   theme.palette.mode === 'light'
        //     ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
        //     : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        // backgroundSize: '100% 20%',
        // backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          你的全能 AI 助手
        </Typography>

        {/* <Typography
          component="span"
          variant="h2"
          sx={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
        >
          你的全能 AI 助手
        </Typography> */}
        <ToggleButtonGroup
          sx={{
            mt: { xs: 3, sm: 3 },
          }}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">AI助手</ToggleButton>
          <ToggleButton value="android">AI翻译</ToggleButton>
          <ToggleButton value="ios">AI图片</ToggleButton>
        </ToggleButtonGroup>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: { xs: 3, sm: 3 },
          }}
        >
          在一处即可与所有顶尖模型聊天。
        </Typography>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 3, sm: 3 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            overflow: 'hidden',
            backgroundImage:
              theme.palette.mode === 'light'
                ? `url(${LightVideoSource})`
                : `url(${DarkVideoSource})`,
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          {/* <video
            autoPlay
            loop
            muted
            poster={
              theme.palette.mode === 'light'
                ? LightVideoSource
                : DarkVideoSource
            }
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source
              src={theme.palette.mode === 'light' ? LightVideo : DarkVideo}
              type="video/mp4"
            />
          </video> */}
        </Box>
      </Container>
    </Box>
  );
}
