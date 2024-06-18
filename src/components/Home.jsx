import React from 'react'
import './home.css';
import NavBar from './NavBar';

import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
    <div className='body'>
    <NavBar></NavBar>
    <br/>
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
        
        </Grid>
        <Grid item xs={2}>
        <h1>
      Vaishnavi
    </h1>
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 } } className =" con">
      <Grid container spacing={2}>
        <Grid item xs={4}>
      <h2>Services</h2>
      <br></br>
           <div className='app'>
            <img src='.\1one.png'className='ic1'></img>
            <h5 className='p1'>App development</h5>
            
           </div>
           <p className='p2'>I am a App frontend <br/>developer (using flutter).
            </p>
            <br/>
            <div className='app'>

            <img src='.\2one.png'className='ic1'></img>
            <h5 className='p1'>Web devlopment</h5>
            
           </div>
           <p className='p2'>I am web developer <br/>Mern stack,js,html,css.
            </p>
            <br></br>
            <div className='app'>

            <img src='.\3rd.png'className='ic1'></img>
            <h5 className='p1'>Database</h5>
          </div>
          <h6 className='p2'>Database <br/>Mysql,Mongodb.
            </h6>
        </Grid>
        <Grid item xs={4}>
      <div className='photo-con'>
           <img src='./Frame 481716.png' className='frame'></img>
           <img src='./self.png' className='frame-2'></img>
      </div>
        </Grid>
        <Grid item xs={4}>
          <div className='about'>
            <h4>Proficient in Frontend and MERN Stack</h4>
            <br></br><br></br>
            <p className='p9'>
            Hi I'm <span className='s'>Vaishnavi</span> .A Front-end   and Mern stack Developer .
            I am a 2nd year CSE student with a keen interest in the front-end development. I love to create visually appealing and informative designs. Welcome!! to my small world of the internet......
</p>
<br></br>
<span className='s1'>2 years</span>
<p className='p00'>  Expirence</p>


          </div>
          <br></br>
          <button className='cv' type='open'>Get My CV</button>
        </Grid>
      </Grid>
    </Box>
    </div>
    
    </>
    
  )
}