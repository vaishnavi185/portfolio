import React from 'react';
import './service.css';
import bgImage from './black.png'; // Adjust the path according to your file structure
import bgImage1 from './purple.png';
import bgImage2 from './green.png';
export default function Service() {
  return (
    <div className='servo'>
      <div className='im5'>
        <h4 className='h4'>SERVICES</h4>
        <h2 className='h2'>
          Explore My Recent <span  style={{ color: '#03DAC6', fontSize: '30px' }}>Works</span>
        </h2>
        <p className='h5' style={{color:'white'}}>
          We transform your ideas into a distinctive web project that both inspires you and captivates your customers
        </p>
<br></br> <br></br> <br></br>
   <br></br>     <div className='line'>
          <div className='Box'>
          <img src={bgImage} alt="img" className='im0' />
          <h5 className='head'>Memory-Box</h5>
          <p>Memory Box is an app designed to assist Alzheimer's patients by helping them store, organize, 
            and recall important memories, made using Flutter and Firebase.</p>
            <span className='f'>github-link: <a href='https://github.com/vaishnavi185/Memory-Box'>click here </a></span>
            </div>
          <div className='Box' style={{background : 'black'}}>

          <img src={bgImage1} alt="img" className='im0' />
          <h5 className='head' style={{color:'#BB86FC'}}>Online-shopping-web</h5>
          < p style={{color:'#BB86FC'}}>Online Pizza Shopping and Delivery Platform 
            Developed Using the MERN Stack</p>
            <span className='f' style={{color:'#BB86FC'}}>github-link: <a href='https://github.com/vaishnavi185/e-commerce'>click here </a></span>
            </div>
          <div className='Box'style={{background : 'black'}}>
          <img src={bgImage2} alt="img" className='im0' />
          <h5 className='head' style={{color:'#03DAC6'}}>Quize-web-app</h5>
          < p style={{color:'#03DAC6'}}>A simple quiz web app made in JavaScript, HTML, and CSS that calculates scores of correct and incorrect answers.</p>
            <span className='f' style={{color:'#03DAC6'}}>github-link: <a href='https://github.com/vaishnavi185/quize-web-'>click here </a></span>
          
          </div>
        </div>
      </div>
    </div>
  );
}
