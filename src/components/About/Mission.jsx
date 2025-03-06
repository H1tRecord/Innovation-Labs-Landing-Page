import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Lightbulb, School, GroupWork } from '@mui/icons-material';

const missionPoints = [
    {
        icon: <School />,
        title: "Education",
        description: "Providing cutting-edge technology education and hands-on learning experiences"
    },
    {
        icon: <GroupWork />,
        title: "Collaboration",
        description: "Fostering partnerships between students, educators, and industry professionals"
    },
    {
        icon: <Lightbulb />,
        title: "Innovation",
        description: "Encouraging creative problem-solving and technological advancement"
    }
];

const Mission = () => {
    return (
        <Box sx={{ py: 12, backgroundColor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 4, color: 'text.secondary' }}>
                            To empower the next generation of innovators through hands-on learning, cutting-edge technology, and meaningful collaboration with industry partners.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid container spacing={3}>
                            {missionPoints.map((point, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Paper elevation={0} sx={{ p: 3, height: '100%', bgcolor: 'background.default' }}>
                                        <Box sx={{ color: 'primary.main', mb: 2 }}>
                                            {point.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ mb: 1 }}>
                                            {point.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {point.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Mission;
