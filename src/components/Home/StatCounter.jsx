import { Box, Container, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';
import statsData from '../../assets/data/stats.json';

const StatCounter = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', py: 8, color: 'white' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {statsData.stats.map((stat, index) => (
                        <Grid 
                            item 
                            xs={6} 
                            md={3} 
                            key={index} 
                            sx={{ textAlign: 'center' }}
                        >
                            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                                <CountUp end={stat.number} duration={2.5} />
                                {stat.suffix}
                            </Typography>
                            <Typography variant="h6">{stat.label}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatCounter;
