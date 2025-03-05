import { Container, Box } from '@mui/material';
import PageHero from '../components/PageHero';
import MissionAndVision from '../components/About/MissionAndVision';
import Team from '../components/About/Team';

const About = () => {
    return (
        <>
            <PageHero
                title="About Innovation Lab"
                subtitle="Empowering the next generation of innovators through cutting-edge technology and hands-on learning"
                image="https://placehold.co/400x200/252f3f/ffffff?text="
            />
            <Container maxWidth="lg">
                <MissionAndVision />
                <Team />
            </Container>
        </>
    );
};

export default About;
