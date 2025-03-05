import { Box, Container, Grid, Typography, IconButton, Link, Stack, TextField, Button } from '@mui/material';
import {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    Phone,
    Email,
    LocationOn,
    ArrowForward
} from '@mui/icons-material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                pt: 8,
                pb: 3
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Brand and Newsletter Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            InnovationsLab
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Join our community of innovators and stay updated with the latest tech trends and events.
                        </Typography>
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                                Subscribe to our newsletter
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <TextField
                                    size="small"
                                    placeholder="Enter your email"
                                    sx={{ flexGrow: 1 }}
                                />
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForward />}
                                    sx={{ minWidth: 'auto' }}
                                >
                                    Join
                                </Button>
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={2}>
                            {[
                                { icon: <Facebook />, label: 'Facebook' },
                                { icon: <Twitter />, label: 'Twitter' },
                                { icon: <LinkedIn />, label: 'LinkedIn' },
                                { icon: <Instagram />, label: 'Instagram' }
                            ].map((social) => (
                                <IconButton
                                    key={social.label}
                                    color="primary"
                                    aria-label={social.label}
                                    sx={{
                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                            transform: 'translateY(-2px)',
                                            transition: 'all 0.2s'
                                        }
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Quick Links
                        </Typography>
                        <Stack spacing={1.5}>
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'About', path: '/about' },
                                { label: 'Events', path: '/events' },
                                { label: 'FAQ', path: '/faq' }
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.path}
                                    color="text.secondary"
                                    underline="none"
                                    sx={{
                                        '&:hover': {
                                            color: 'primary.main',
                                            transform: 'translateX(5px)',
                                            transition: 'all 0.2s'
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contact Us
                        </Typography>
                        <Stack spacing={3}>
                            {[
                                { icon: <LocationOn />, text: '123 Innovation Street, Tech City, TC 12345' },
                                { icon: <Phone />, text: '+1 (555) 123-4567' },
                                { icon: <Email />, text: 'contact@innovationslab.com' }
                            ].map((contact, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    alignItems="flex-start"
                                    gap={1.5}
                                    sx={{
                                        '&:hover': {
                                            color: 'primary.main',
                                            transform: 'translateX(5px)',
                                            transition: 'all 0.2s'
                                        }
                                    }}
                                >
                                    {contact.icon}
                                    <Typography variant="body2" color="text.secondary">
                                        {contact.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Map Section - Replacing Working Hours */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Find Us
                        </Typography>
                        <Box
                            sx={{
                                height: 200,
                                width: '100%',
                                overflow: 'hidden',
                                borderRadius: 1,
                                border: '1px solid',
                                borderColor: 'divider'
                            }}
                        >
                            <iframe
                                title="location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596657!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1656805997515!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box
                    sx={{
                        mt: 8,
                        pt: 3,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} sm="auto">
                            <Typography variant="body2" color="text.secondary" align="center">
                                © {currentYear} InnovationsLab. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm="auto">
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={3}
                                alignItems="center"
                            >
                                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        color="text.secondary"
                                        underline="none"
                                        sx={{
                                            '&:hover': {
                                                color: 'primary.main'
                                            }
                                        }}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
