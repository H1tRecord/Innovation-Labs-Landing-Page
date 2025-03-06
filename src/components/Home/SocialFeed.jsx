import { useEffect, useState } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardMedia, 
    Button, 
    Divider,
    Modal,
    IconButton
} from '@mui/material';
import { Facebook, Close } from '@mui/icons-material';

const SocialFeed = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('/src/assets/data/socialFeed.json')
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error => console.error('Error loading social feed:', error));
    }, []);

    const handleOpenModal = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    return (
        <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
            <Container maxWidth="lg">
                <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}
                >
                    Latest from Facebook
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Stay up-to-date with our latest news and events
                </Typography>

                <Grid container spacing={1}>
                    {posts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card 
                                onClick={() => handleOpenModal(post)}
                                sx={{ 
                                    position: 'relative',
                                    paddingTop: '100%',
                                    borderRadius: 0,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        '& .overlay': {
                                            opacity: 1
                                        }
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={post.image}
                                    alt={`Social post ${index + 1}`}
                                    sx={{ 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box 
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        padding: 2
                                    }}
                                >
                                    <Typography variant="body2" color="white" align="center">
                                        {post.caption}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Modal
                    open={Boolean(selectedPost)}
                    onClose={handleCloseModal}
                    aria-labelledby="social-post-modal"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            overflow: 'hidden',
                            '& img': {
                                maxHeight: '80vh',
                                width: '100%',
                                objectFit: 'contain'
                            }
                        }}
                    >
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: 'white',
                                bgcolor: 'rgba(0,0,0,0.5)',
                                '&:hover': {
                                    bgcolor: 'rgba(0,0,0,0.7)'
                                }
                            }}
                        >
                            <Close />
                        </IconButton>
                        {selectedPost && (
                            <>
                                <img 
                                    src={selectedPost.image} 
                                    alt="Social post"
                                />
                                <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
                                    <Typography variant="body1">
                                        {selectedPost.caption}
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Modal>

                <Divider sx={{ my: 6 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<Facebook />}
                        href="https://www.facebook.com/share/g/1AMoxpTn5n/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: '#1877F2',
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                backgroundColor: '#0d6efd'
                            }
                        }}
                    >
                        Join our Facebook Group
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default SocialFeed;
