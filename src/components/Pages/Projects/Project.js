import React from 'react';
import Header from '../../Header/Header';
import './Project.css';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import photo1 from './static/img1.jpeg';

const Project = () => {
    return(
        <div className='projects'>
            <Header/>
            <div className="container">
                <div className='wrapper'>
                    <div className='title'>Projects</div>
                    <div className='img'><img src={photo1} alt='banner'/></div>
                    <Box sx={{width: '100%'}}>
                        <Accordion defaultExpanded>
                            <AccordionSummary>
                                <Typography variant='h5' color='initial'>Adding Value to Craft: LCF x Selyn Educational Podcast</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography color="text.secondary">
                            I was invited to the London College of Fashion, University of the Arts, UK to record three episodes for an educational podcast titled "Adding Value to Craft", 
                            part of a project with Selyn, Sri Lanka, to educate artisans on how to add value to their craft when selling.
                            </Typography>
                            <Typography sx={{pt:{sm:2}}}>
                                <b>Skills</b>: Sustainability · Sustainable Design · Craft Culture · Fashion Marketing · Creative Business Strategies
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary>
                                <Typography variant='h5' color='initial'>Art for COVID India - 2021</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/*<img src='./../../../Assets/Projects/Project2img1.png'/>*/}
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography color="text.secondary">
                                I joined the nation wide initiative and campaign #ArtForCOVIDIndia to contribute to COVID Relief India on individual capacity.
                                <br/>
                                Some of my personal works like hand crafted Tea-stained journals and Up-cycledGlass bottles were put up on SALE on @artkraft2021 on Instagram which was live for 14 days. 
                                100% of the sale during the two weeks proceeded to Odisha State Volunteers and Social Workers Association (osvswa.org), an NGO that provided free cooked meals by 
                                Women SHGs (Self Help Groups) to the needy poor, daily wage earners, indigenous communities and street beggars primarily in Kandhamal and Nayagarh districts in Odisha.
                                <br/>
                                Take a look at the journey https://www.instagram.com/artkraft2021/
                                </Typography>
                                <Typography sx={{pt:{sm:2}}}>
                                    <b>Skills</b>: Hand Embroidery · Mixed Media · Upcycling · Community Service
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary>
                                <Typography variant='h5' color='initial'>
                                    PROJECT FANI - 2019 for the Crafts Council of India
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary">
                                    I worked as a Design Consultant on a short-term project named "PROJECT FANI" for the Crafts Council of India in 2019 to provide financial support
                                    and work opportunities to the local artisans in Raghurajpur village on the east coast of Odisha, which was terribly impacted by the super cyclone FANI.
                                    I designed and developed a range of contemporary corporate gifts for the festive season by collaborating with the Palm Leaf carving artisans and giving
                                    fresh inputs by design intervention to the existing traditional techniques of handicrafts by the local community.I worked as a Design Consultant on a
                                    short-term project named "PROJECT FANI" for the Crafts Council of India in 2019 to provide financial support and work opportunities to the local artisans in
                                    Raghurajpur village on the east coast of Odisha, which was terribly impacted by the super cyclone FANI. I designed and developed a range of contemporary corporate
                                    gifts for the festive season by collaborating with the Palm Leaf carving artisans and giving fresh inputs by design intervention to the existing traditional
                                    techniques of handicrafts by the local community.
                                </Typography>
                                <Typography sx={{pt:{sm:2}}}>
                                    <b>Skills</b>: Community Development · Handicraft · Design
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Project;
