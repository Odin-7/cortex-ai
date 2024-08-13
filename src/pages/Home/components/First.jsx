import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import SearchComponent from '@/components/SearchComponent';
import StarRing from '@/components/StarRing';
import RollPlay from '@/components/RollPlay/RollPlay';
import TypedText from '@/components/TypedText/TypedText';

// import GptLight from '@/assets/images/gpt-icon-light.svg';
import GptDark from '@/assets/images/chatgpt.svg';
import Claude from '@/assets/images/claude.svg';
import Gemini from '@/assets/images/gemini.svg';
import Wenxin from '@/assets/images/wenxin.svg';
import Tongyi from '@/assets/images/tongyi.svg';
import Star1 from '@/assets/images/star-1.svg';
import Star2 from '@/assets/images/star-2.svg';
import Star3 from '@/assets/images/star-3.svg';
import Star4 from '@/assets/images/star-4.svg';
import Star5 from '@/assets/images/star-5.svg';
import Star6 from '@/assets/images/star-6.svg';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function First() {
  const navigate = useNavigate();

  return (
    <Box
      id="first-page"
      sx={(theme) => ({
        width: '100%',
        height: '80vh',
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
        <div
          className="first-page-logo-tips no-select"
          onClick={() => navigate('/dashboard')}
        >
          <AutoAwesomeIcon
            sx={{ height: '14px', marginRight: '3px' }}
            className="icon"
          />
          <span>启用 AI 原力</span>
          <div className="star star-1">
            <img src={Star1} alt="Star 1" />
          </div>
          <div className="star star-2">
            <img src={Star2} alt="Star 2" />
          </div>
          <div className="star star-3">
            <img src={Star3} alt="Star 3" />
          </div>
          <div className="star star-4">
            <img src={Star4} alt="Star 4" />
          </div>
          <div className="star star-5">
            <img src={Star5} alt="Star 5" />
          </div>
          <div className="star star-6">
            <img src={Star6} alt="Star 6" />
          </div>
        </div>
        <Stack
          spacing={0}
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
                height: { xs: '8rem', sm: '10rem' },
              }}
            >
              {/* CortexAI */}
            </Typography>
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            color="text.primary"
            sx={{
              textAlign: 'center',
            }}
          >
            一句话，为您搞定一切。
          </Typography>
          <Box
            textAlign="center"
            color="text.secondary"
            sx={{
              alignSelf: 'center',
              width: { sm: '100%', md: '80%' },
              mt: 2,
            }}
          >
            <TypedText
              texts={[
                '一处聊天，同时调用多个模型，选择最佳答案 ',
                'AI 编码，无需人类插手 ',
              ]}
            />
          </Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{
              pt: 5,
              width: { xs: '90%', sm: 'auto' },
              textAlign: 'center',
            }}
          ></Stack>
        </Stack>
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <RollPlay />
        </Box>
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
