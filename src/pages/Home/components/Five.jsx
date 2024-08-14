import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Chatgpt from '@/assets/images/chatgpt.svg';
import Claude from '@/assets/images/claude.svg';
import Gemini from '@/assets/images/gemini.svg';

const tiers = [
  {
    title: 'Free',
    subTitle: '免费',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: '免费注册',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    subTitle: 'VIP',
    subheader: '推荐',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
      'Dedicated team',
      'Best deals',
    ],
    buttonText: '开通会员',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    subTitle: 'SVIP',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: '高级会员',
    buttonVariant: 'outlined',
  },
];

const logoStyle = {
  height: '25px',
  with: 'auto',
  cursor: 'pointer',
  padding: '0 5px',
};

export default function Five() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container
      id="five"
      sx={{
        pt: { xs: 3, sm: 5 },
        pb: { xs: 8, sm: 10 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 5 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { xs: 'center', sm: 'center', md: 'center' },
          }}
        >
          <span className="cortex-font">开通</span>
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="text.primary"
          sx={{
            mt: { xs: 2, sm: 2 },
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 3, sm: 2 },
            justifyContent: 'center',
          }}
        >
          <span className="cortex-font">支持</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src={Chatgpt} style={logoStyle} alt="chatgpt" />
            <Typography
              variant="h5"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <span className="cortex-font">GPT-4o</span>
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src={Claude} style={logoStyle} alt="claude" />

            <Typography
              variant="h5"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <span className="cortex-font">Claude 3.5</span>
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src={Gemini} style={logoStyle} alt="gemini" />

            <Typography
              variant="h5"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <span className="cortex-font">Gemini 1.5</span>
            </Typography>
          </div>
        </Typography>
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
          <ToggleButton value="web">每年（节省80%）</ToggleButton>
          <ToggleButton value="android">每月</ToggleButton>
        </ToggleButtonGroup>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: { xs: 2, sm: 2 },
          }}
        >
          成为我们的会员，为您提供更高级的功能
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Professional' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Professional' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Professional'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'Professional' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.subTitle}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color:
                      tier.title === 'Professional' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    {tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; 元/月
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Professional'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      // component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Professional'
                            ? 'grey.200'
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
