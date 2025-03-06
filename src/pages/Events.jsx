import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import EventCard from '../components/Events/EventCard';
import eventsData from '../assets/data/events.json';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        setEvents(eventsData.events);
    }, []);

    const categories = ['all', ...new Set(eventsData.events.map(event => event.category.toLowerCase()))];

    const filteredEvents = filter === 'all' 
        ? events 
        : events.filter(event => event.category.toLowerCase() === filter);

    return (
        <Box>
            <PageHero
                title="Events | Innovation Lab"
                subtitle="Discover upcoming workshops, seminars, and networking opportunities"
                image="https://placehold.co/400x200/252f3f/ffffff?text="
            />
            <Container maxWidth="lg" sx={{ py: 8 }}>
                {/* Category Filters */}
                <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? 'contained' : 'outlined'}
                            onClick={() => setFilter(category)}
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                {/* Events Grid */}
                <Grid container spacing={4}>
                    {filteredEvents.map((event) => (
                        <Grid item xs={12} md={6} lg={4} key={event.id}>
                            <EventCard event={event} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Events;
