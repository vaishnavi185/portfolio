import React from 'react'
import './home.css';
import NavBar from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

export default function Home() {
  return (
    <>
  
    <div className='body'>
    <NavBar></NavBar>
    <br></br>
    <br></br>
<br></br>
    <h1>Vaishnavi</h1>

<br></br>
  
 
     <Container className='content'>
     <Row>
        <Col>
        <Container className='services'>
          <h2>services</h2>
          <br></br>
           <div className='app'>
            <img src='.\icon.png'className='ic1'></img>
            <p className='p1'>App development</p>
            
           </div>
           <p className='p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo vel molestiae illum, 
            </p>
            <br></br>
            <div className='app'>

            <img src='.\icon2.png'className='ic1'></img>
            <p className='p1'>web development</p>
            
           </div>
           <p className='p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo vel molestiae illum, 
            </p>
            <br></br>
            <div className='app'>

            <img src='.\icon3.png'className='ic1'></img>
            <p className='p1'>  DataBase</p>
          </div>
           <p className='p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo vel molestiae illum, 
            </p>

        </Container>
        </Col>
        <Col>
        <div className='photo'>
          <img src='.\Frame 481716.png' className='pic'></img>

        </div>
        </Col>
        <Col>3 of 3</Col>
      </Row>
     </Container>
      
    
   
    </div>
    </>
    
  )
}
