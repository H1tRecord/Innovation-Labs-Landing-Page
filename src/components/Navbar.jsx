import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    useTheme,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    useScrollTrigger,
    Slide
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const trigger = useScrollTrigger();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Events', path: '/events' },
        { title: 'FAQ', path: '/faq' },
    ];

    const drawer = (
        <Box sx={{ width: 250 }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h6" component={Link} to="/" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                    InnovationsLab
                </Typography>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        button
                        key={item.title}
                        component={Link}
                        to={item.path}
                        onClick={handleDrawerToggle}
                        selected={location.pathname === item.path}
                    >
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar
                    position="sticky"
                    color="default"
                    elevation={1}
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(8px)'
                    }}
                >
                    <Toolbar sx={{ py: 1, justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                textDecoration: 'none',
                                color: 'inherit',
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', md: '1.25rem' }
                            }}
                        >
                            InnovationsLab
                        </Typography>

                        <Box sx={{ 
                            display: { xs: 'none', md: 'flex' }, 
                            gap: 4
                        }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.title}
                                    component={Link}
                                    to={item.path}
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: location.pathname === item.path ? '100%' : '0%',
                                            height: '2px',
                                            bottom: -2,
                                            left: 0,
                                            backgroundColor: 'primary.main',
                                            transition: 'width 0.2s ease-in-out'
                                        },
                                        '&:hover::after': {
                                            width: '100%'
                                        }
                                    }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Slide>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Navbar;
