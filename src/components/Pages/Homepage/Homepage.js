import React from 'react';
import './Homepage.css';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <Container sx={{display: 'flex', flexDirection: 'column',alignItems: 'left',pt: { xs: 35, sm: 25 }, pb: { xs: 8, sm: 12 }}}>
            <Typography variant="h1" sx={{display: 'flex',flexDirection: { xs: 'column', md: 'row' },alignSelf: 'left',textAlign: 'center',pt: { xs: 10, sm: 15 },fontSize: 'clamp(3.5rem, 10vw, 4rem)',}}>
                Swikruti Pradhan
          </Typography>
          <div className='pages'>
            <div className='row'>
                <span><Link to="/Design">Design</Link> |</span>
                <span><Link to="/Research">Research</Link> |</span>
                <span><Link to="/Consultation">Consultation</Link> |</span>
                <span><Link to="/Academia">Academia</Link> |</span>
                <span><Link to="/Projects">Projects</Link> |</span>
                <span><Link to="/Awards">Awards</Link> |</span>
                <span><Link to="/Features">Features</Link> |</span>
                <span><Link to="/Journal">Journal</Link> |</span>
                <span><Link to="/About">About</Link> |</span>
                <span><Link to="/Contact">Contact</Link> </span>
            </div>
          </div>
        </Container>
    )
};

export default Homepage;