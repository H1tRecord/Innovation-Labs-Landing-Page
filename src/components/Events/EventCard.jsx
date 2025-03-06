import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { CalendarToday, LocationOn } from '@mui/icons-material';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card 
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={event.image}
        alt={event.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Chip 
            label={event.category} 
            color="primary" 
            size="small" 
            sx={{ mb: 1 }}
          />
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {event.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CalendarToday sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {formatDate(event.date)} | {event.time}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOn sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {event.location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
