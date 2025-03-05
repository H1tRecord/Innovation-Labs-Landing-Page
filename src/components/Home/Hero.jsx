import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroWrapper = styled(Box)(({ theme }) => ({
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://placehold.co/1920x1080/252f3f/ffffff?text=Innovation+Lab)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
}));

const Hero = () => {
    return (
        <HeroWrapper>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                fontWeight: 'bold',
                                mb: 2,
                                animation: `${fadeIn} 1s ease-out`,
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-12px',
                                    left: 0,
                                    width: '80px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #fff, rgba(255,255,255,0.5))'
                                }
                            }}
                        >
                            Welcome to Innovation Lab
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                opacity: 0.9,
                                maxWidth: '600px',
                                animation: `${fadeIn} 1s ease-out 0.3s both`
                            }}
                        >
                            Where ideas transform into reality. Join us in shaping the future of technology and innovation.
                        </Typography>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                gap: 2,
                                animation: `${fadeIn} 1s ease-out 0.6s both`
                            }}
                        >
                            <Button
                                component={Link}
                                to="/about"
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    '&:hover': { backgroundColor: 'primary.dark' },
                                }}
                            >
                                Learn More
                            </Button>
                            <Button
                                component={Link}
                                to="/events"
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    '&:hover': {
                                        borderColor: 'white',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                View Events
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </HeroWrapper>
    );
};

export default Hero;
