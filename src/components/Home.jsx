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
<br></br><br></br>
    <h1>Vaishnavi</h1>

<br></br>
<br></br>  
<br></br>  
     <Container className='content'>
     <Row>
        <Col>
        <Container className='services'>
          <h2>services</h2>
           <div className='app'>
            <img src='.\icon.png'className='ic1'></img>
            <p className='p1'>App development</p>
           </div>
        </Container>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
     </Container>
      
    
   
    </div>
    </>
    
  )
}
