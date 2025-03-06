import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Engineering, Psychology, Lightbulb, Diversity3 } from '@mui/icons-material';

const ValueCard = styled(Card)(({ theme }) => ({
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: 80,
    height: 80,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3),
    '& svg': {
        fontSize: 40,
    },
}));

const values = [
    {
        icon: <Engineering />,
        title: "Technical Excellence",
        description: "We strive for excellence in everything we do, pushing the boundaries of technical innovation."
    },
    {
        icon: <Psychology />,
        title: "Creative Thinking",
        description: "Fostering an environment that encourages creative problem-solving and unique perspectives."
    },
    {
        icon: <Lightbulb />,
        title: "Innovation First",
        description: "Putting innovation at the forefront of our approach to learning and development."
    },
    {
        icon: <Diversity3 />,
        title: "Inclusive Growth",
        description: "Ensuring that technology education is accessible and beneficial to all."
    },
];

const Values = () => {
    return (
        <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography 
                    variant="h3" 
                    align="center" 
                    sx={{ 
                        mb: 8,
                        fontWeight: 'bold',
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
                    Our Core Values
                </Typography>
                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <ValueCard elevation={2}>
                                <CardContent>
                                    <IconWrapper>
                                        {value.icon}
                                    </IconWrapper>
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {value.description}
                                    </Typography>
                                </CardContent>
                            </ValueCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Values;
