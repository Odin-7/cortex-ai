import * as React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ClearIcon from '@mui/icons-material/Clear';

import TypedText from '@/components/TypedText/TypedText';

import Star1 from '@/assets/images/star-1.svg';
import Star2 from '@/assets/images/star-2.svg';
import Star3 from '@/assets/images/star-3.svg';
import Star4 from '@/assets/images/star-4.svg';
import Star5 from '@/assets/images/star-5.svg';
import Star6 from '@/assets/images/star-6.svg';

import WebhookIcon from '@mui/icons-material/Webhook';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Bot() {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClear = () => {
    setValue('');
    setIsFocused(true);
  };

  return (
    <Box
      id="bot-page"
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFFFFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 43%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* <Stack
          spacing={0}
          useFlexGap
          sx={{
            width: '100%',
          }}
        >
          头
        </Stack> */}

        <Stack
          className="session-record-container"
          spacing={0}
          useFlexGap
          sx={{
            width: '100%',
            flex: '1',
            overflow: 'auto',
            p: { xs: '0 1rem', md: '0 2rem' },
          }}
        >
          <Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
          </Box>
        </Stack>
        <Stack
          spacing={0}
          useFlexGap
          sx={{
            width: '100%',
          }}
        >
          {/* 提示 */}
          <Box
            sx={{ width: { sm: '100%', md: '90%' }, margin: { md: 'auto' } }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 1, md: 2 },
                zIndex: 1,
                mt: { xs: 2, md: 2 },
              }}
            >
              <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
                <div className="first-page-input-tips first-page-input-tips-active">
                  <LocalFireDepartmentIcon className="pre-icon" />
                  帮我生成 {new Date().getFullYear()} 年度工作计划
                  <KeyboardArrowRightIcon className="icon" />
                </div>
              </Box>
              <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
                <div className="first-page-input-tips">
                  帮我写一份互联网运营计划报告
                  <KeyboardArrowRightIcon className="icon" />
                </div>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <div className="first-page-input-tips">
                  帮我分析一下这个SQL查询语句
                  <KeyboardArrowRightIcon className="icon" />
                </div>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <div className="first-page-input-tips">
                  帮我优化一下简历
                  <KeyboardArrowRightIcon className="icon" />
                </div>
              </Box>
            </Box>
          </Box>
          {/* 聊天框 */}
          <Box
            textAlign="center"
            color="text.secondary"
            sx={{
              // display: { sm: '', md: 'none' },
              width: '100%',
              mt: 2,
              pb: 2,
            }}
          >
            <div
              className="first-page-input"
              style={{
                width: '100%',
                minHeight: '150px',
                // height: '200px',
                padding: '0.5em 0.8em 3.5em 0.8em',
                alignItems: 'flex-start',
              }}
              onClick={() => setIsFocused(true)}
            >
              <div style={{ flex: '1', height: '100%' }}>
                {isFocused ? (
                  <InputBase
                    multiline
                    minRows={3}
                    maxRows={6}
                    placeholder="输入问题，让Cortex帮你解决"
                    value={value}
                    onChange={handleChange}
                    autoFocus
                    sx={{ flex: 1, width: '100%', lineHeight: '1.8em' }}
                    inputProps={{ 'aria-label': 'search' }}
                    onBlur={() => {
                      if (!value) {
                        setIsFocused(false);
                      }
                    }}
                  />
                ) : (
                  <div style={{ marginTop: '5px' }}>
                    <TypedText
                      texts={[
                        '一处聊天，同时调用多个模型，选择最佳答案 ',
                        'AI 编码，无需人类插手 ',
                      ]}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ClearIcon
                  style={{
                    display: value ? 'block' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={handleClear}
                />
                <Button
                  component="a"
                  target="_blank"
                  sx={{
                    borderWidth: 0,
                    color: '#ffffff',
                    width: '80px',
                    marginLeft: '10px',
                    height: '35px',
                    borderRadius: '8px',
                    background:
                      'linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)',
                  }}
                >
                  <span
                    className="cortex-font"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <AutoAwesomeIcon
                      style={{ fontSize: '1.2rem', margin: '0 3px 3px 0' }}
                    />
                    <span>发送</span>
                  </span>
                </Button>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
