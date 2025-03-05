import { Box, Typography, Paper, Grid } from '@mui/material';
import { Visibility, Timeline, GroupWork, Lightbulb } from '@mui/icons-material';

const visionPoints = [
    {
        icon: <Visibility sx={{ fontSize: 40 }}/>,
        title: "Future Focus",
        description: "Building tomorrow's technology leaders through innovative education and hands-on experience."
    },
    {
        icon: <Timeline sx={{ fontSize: 40 }}/>,
        title: "Continuous Growth",
        description: "Fostering an environment of continuous learning and professional development."
    },
    {
        icon: <GroupWork sx={{ fontSize: 40 }}/>,
        title: "Collaborative Success",
        description: "Creating partnerships that drive innovation and community engagement."
    }
];

const MissionAndVision = () => {
    return (
        <Box sx={{ my: 8 }}>
            {/* Mission Section */}
            <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Typography 
                    variant="h3" 
                    sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2
                    }}
                >
                    <Lightbulb sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />
                    Our Mission
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        maxWidth: '800px', 
                        mx: 'auto',
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        lineHeight: 1.8
                    }}
                >
                    The Innovation Lab is dedicated to fostering creativity, collaboration, and technological advancement.
                    We provide a space where ideas transform into reality through cutting-edge technology and expert guidance.
                </Typography>
            </Box>

            {/* Vision Section */}
            <Box sx={{ mt: 12 }}>
                <Typography 
                    variant="h3" 
                    align="center" 
                    sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 'bold',
                        mb: { xs: 4, md: 6 },
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 60,
                            height: 4,
                            backgroundColor: 'primary.main',
                        }
                    }}
                >
                    Our Vision
                </Typography>
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {visionPoints.map((point, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper 
                                elevation={2}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    height: '100%',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: { xs: 'none', md: 'translateY(-8px)' },
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        '& .icon': { color: 'white' },
                                        '& .description': { color: 'rgba(255,255,255,0.9)' }
                                    }
                                }}
                            >
                                <Box className="icon" sx={{ color: 'primary.main', mb: 2 }}>
                                    {point.icon}
                                </Box>
                                <Typography 
                                    variant="h5" 
                                    gutterBottom
                                    sx={{ fontWeight: 'bold', mb: 2 }}
                                >
                                    {point.title}
                                </Typography>
                                <Typography 
                                    className="description"
                                    variant="body1" 
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.7 }}
                                >
                                    {point.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default MissionAndVision;
