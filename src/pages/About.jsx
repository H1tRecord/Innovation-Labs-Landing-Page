import { Box } from '@mui/material';
import PageHero from '../components/PageHero';
import Mission from '../components/About/Mission';
import Vision from '../components/About/Vision';
import Values from '../components/About/Values';
import Team from '../components/About/Team';

const About = () => {
    return (
        <Box>
            <PageHero
                title="About Innovation Lab"
                subtitle="Empowering the next generation of innovators through cutting-edge technology and hands-on learning"
                image="https://placehold.co/400x200/252f3f/ffffff?text="
                overlay={true}
            />
            <Mission />
            <Vision />
            <Values />
            <Team />
        </Box>
    );
};

export default About;
