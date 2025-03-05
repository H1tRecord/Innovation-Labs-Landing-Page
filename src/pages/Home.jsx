import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Hero from '../components/Home/Hero';
import Introduction from '../components/Home/Introduction';
import Features from '../components/Home/Features';
import StatCounter from '../components/Home/StatCounter';
import Partners from '../components/Home/Partners';
import SocialFeed from '../components/Home/SocialFeed';

const LogoImage = styled('img')(({ theme }) => ({
    height: '60px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    opacity: 0.7,
    transition: 'all 0.3s ease',
    '&:hover': {
        filter: 'grayscale(0%)',
        opacity: 1,
    },
}));

const Home = () => {
    return (
        <Box component="main" sx={{ pb: 8 }}>
            <Hero />
            <Partners />
            <Introduction />
            <StatCounter />
            <Features />
            <SocialFeed />
        </Box>
    );
};

export default Home;
