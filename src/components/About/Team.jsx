import { Box, Grid, Typography, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { LinkedIn, Twitter } from '@mui/icons-material';
import teamData from '../../assets/data/teamMembers.json';
import { styled } from '@mui/material/styles';

const TeamMemberImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
}));

const TeamMemberCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: theme.shadows[8],
        '& .memberImage': {
            transform: 'scale(1.05)',
        },
    },
    overflow: 'hidden',
}));

const Team = () => {
    return (
        <Box sx={{ my: 8 }}>
            <Typography 
                variant="h3" 
                align="center" 
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    mb: 6,
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
                Meet Our Team
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {teamData.members.map((member, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <TeamMemberCard>
                            <Box sx={{ overflow: 'hidden' }}>
                                <TeamMemberImage
                                    src={member.image}
                                    alt={member.name}
                                    className="memberImage"
                                />
                            </Box>
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography variant="h6" gutterBottom>
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {member.role}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                                <IconButton 
                                    href={member.social.linkedin} 
                                    target="_blank"
                                    color="primary"
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton 
                                    href={member.social.twitter} 
                                    target="_blank"
                                    color="primary"
                                >
                                    <Twitter />
                                </IconButton>
                            </CardActions>
                        </TeamMemberCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Team;
