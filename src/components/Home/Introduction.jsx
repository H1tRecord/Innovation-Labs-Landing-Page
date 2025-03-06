import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { sectionStyles } from '../../utils/sectionStyles';

const Introduction = () => {
    const navigate = useNavigate();
    
    return (
        <Box component="section" py={12} sx={sectionStyles.dark}>
            <Container maxWidth="lg" sx={sectionStyles.content}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://placehold.co/800x600/252f3f/ffffff?text="
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 4,
                                boxShadow: 3,
                                transform: 'perspective(1000px) rotateY(-5deg)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'perspective(1000px) rotateY(0deg)',
                                }
                            }}
                            alt="Innovation Community"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" gutterBottom sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #1976d2, #82b1ff)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 3
                        }}>
                            Welcome to Innovation Lab
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8, mb: 4 }}>
                            Join our vibrant community of innovators, creators, and problem-solvers. We're building a space where technology meets creativity, where ideas transform into reality, and where everyone has the opportunity to learn, grow, and contribute to Sorsogon's technological future.
                        </Typography>
                        <Button
                            onClick={() => navigate('/about')}
                            variant="outlined"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                borderRadius: 2,
                                px: 4,
                                py: 1.5,
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                }
                            }}
                        >
                            Click here to learn more about us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Introduction;
