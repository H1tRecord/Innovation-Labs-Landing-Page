import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import featuresData from '../../assets/data/features.json';

const FeatureCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
    },
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius * 2,
}));

const Features = () => {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                >
                    What We Offer
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Discover our state-of-the-art facilities and programs
                </Typography>
                <Grid container spacing={4}>
                    {featuresData.features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <FeatureCard>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={feature.image}
                                    alt={feature.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                                        {feature.title}
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2 }}>
                                        {feature.items.map((item, idx) => (
                                            <Typography
                                                key={idx}
                                                component="li"
                                                variant="body1"
                                                sx={{ mb: 1 }}
                                            >
                                                {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </FeatureCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Features;
