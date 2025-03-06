import { Box, Container, Typography, Grid } from '@mui/material';

const Vision = () => {
    return (
        <Box sx={{ py: 12, bgcolor: 'primary.main', color: 'white' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="https://placehold.co/600x400/252f3f/ffffff?text=Vision"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 3
                            }}
                            alt="Our Vision"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
                            Our Vision
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                            To become the leading technology innovation hub in Sorsogon, fostering a culture of creativity and technological advancement.
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8 }}>
                            We envision a future where every student has access to cutting-edge technology and the skills needed to succeed in the digital age. Through our programs and partnerships, we aim to bridge the gap between education and industry needs.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Vision;
