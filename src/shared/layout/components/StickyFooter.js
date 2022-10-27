import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Copyright from './CopyRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import '../../styles/footer.css';


export default function StickyFooter() {



  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg" className='footer-container'>
          <div>
            <Typography variant="body1">
              Footer
            </Typography>
            <Copyright />
          </div>
          <div className='social-links'>
            <Typography variant="body1">
              Contact Us
            </Typography>
            <div className='links'>
              <Link href='google'>
                <FacebookIcon />
              </Link>
              <Link href='google'>
                <TwitterIcon />
              </Link>
              <Link href='google'>
                <YouTubeIcon />
              </Link>
              <Link href='google'>
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </Container>

      </Box>
    </Box>
  );
}