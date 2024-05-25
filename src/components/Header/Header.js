import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Header = () => {
    return(
        <div className='header'>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'#c7a55c' }}>
                <Typography component="h2" variant="h5" color="inherit" align="left" noWrap sx={{ flex: 1, color:'white' }}>
                    Swikruti Pradhan
                </Typography>
                <Button size="medium" href='/' sx={{color:'white'}}>Home</Button>
                <Button size="medium" href='/Design' sx={{color:'white'}}>Design</Button>
                <Button size="medium" href='/Research' sx={{color:'white'}}>Research</Button>
                <Button size="medium" href='/Consultation' sx={{color:'white'}}>Consultation</Button>
                <Button size="medium" href='/Academia' sx={{color:'white'}}>Academia</Button>
                <Button size="medium" href='/Projects' sx={{color:'white'}}>Projects</Button>
                <Button size="medium" href='/Awards' sx={{color:'white'}}>Awards</Button>
                <Button size="medium" href='/Features' sx={{color:'white'}}>Features</Button>
                <Button size="medium" href='/Journal' sx={{color:'white'}}>Journal</Button>
                <Button size="medium" href='/About' sx={{color:'white'}}>About</Button>
                <Button size="medium" href='/Contact' sx={{color:'white'}}>Contact</Button>
            </Toolbar>
        </div>
    )
}

export default Header;