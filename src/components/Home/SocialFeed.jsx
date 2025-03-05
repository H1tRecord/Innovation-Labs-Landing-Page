import { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const SocialFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/src/assets/data/socialFeed.json')
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error => console.error('Error loading social feed:', error));
    }, []);

    return (
        <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}
                >
                    Latest from Facebook
                </Typography>
                <Grid container spacing={2}>
                    {posts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={post.image}
                                    alt={`Social post ${index + 1}`}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.caption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SocialFeed;
