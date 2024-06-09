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
            <img src='.\icon.png'className='ic1'></img>
            <h5 className='p1'>App development</h5>
            
           </div>
           <p className='p2'>I am a App frontend <br/>developer (using flutter).
            </p>
            <br></br>
            <div className='app'>

            <img src='.\icon2.png'className='ic1'></img>
            <h5 className='p1'>Web devlopment</h5>
            
           </div>
           <p className='p2'>I am web developer <br/>Mern stack,js,html,css.
            </p>
            <br></br>
            <div className='app'>

            <img src='.\icon3.png'className='ic1'></img>
            <h5 className='p1'>Database</h5>
          </div>
          <h6 className='p2'>Database <br/>Mysql,Mongodb.
            </h6>
        </Grid>
        <Grid item xs={4}>
      <div className='photo-con'>
           <img src='./Frame 481716.png' className='frame'></img>
      </div>
        </Grid>
        <Grid item xs={4}>
          <div className='about'>
            <h4>⭐Proficient in Frontend and MERN Stack</h4>
            <br></br><br></br>
            <p className='p9'>
    <span className='s'>Hi 👋, I'm Vaishnavi,</span> a <span className='s'>MERN Stack Developer</span>,<span className='s'> Frontend Developer</span>, and <span className='s'>Database Creator</span>.<br></br><br></br>
  I specialize in creating beautiful, functional frontend designs and efficient databases. Welcome to my world of innovative web solutions and captivating user experiences!
</p>
<br></br>
<span className='s'>2 years</span>
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