import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageHero from '../components/PageHero';
import faqData from '../assets/data/faq.json';

const FAQ = () => {
    return (
        <Box>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Find answers to commonly asked questions about our services and facilities"
                image="https://placehold.co/400x200/252f3f/ffffff?text="
            />
            
            <Container maxWidth="lg" sx={{ py: 8 }}>
                {faqData.sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 6 }}>
                        <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                            {section.category}
                        </Typography>
                        
                        {section.items.map((item, itemIndex) => (
                            <Accordion key={itemIndex} sx={{ mb: 1 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{ 
                                        '&:hover': { bgcolor: 'action.hover' }
                                    }}
                                >
                                    <Typography variant="h6">{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default FAQ;
