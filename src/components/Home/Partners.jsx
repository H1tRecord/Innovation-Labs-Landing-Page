import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import partnersData from '../../assets/data/partners.json';

const PartnerLogo = styled('img')(({ theme }) => ({
    height: '60px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.7,
}));

const Partners = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ mb: 6, fontWeight: 'bold' }}
                >
                    Our Partners
                </Typography>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {partnersData.partners.map((partner, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index} sx={{ textAlign: 'center' }}>
                            <PartnerLogo src={partner.logo} alt={partner.name} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Partners;
