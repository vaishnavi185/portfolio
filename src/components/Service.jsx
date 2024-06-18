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
          <h5 className='head'>WEB-DEVELOPMENT</h5>
          <p>I am a MERN stack developer proficient in HTML, CSS, and JavaScript. I have completed several projects that showcase my skills in creating dynamic and responsive web applications. My expertise includes developing with MongoDB, Express.js, React, and Node.js, enabling me to build full-stack applications. </p>
           
            </div>
          <div className='Box' style={{background : 'black'}}>

          <img src={bgImage1} alt="img" className='im0' />
          <h5 className='head' style={{color:'#BB86FC'}}>APP-DEVELOPMENT</h5>
          < p style={{color:'#BB86FC'}}>I am a proficient Flutter developer with a focus on app front-end development. I excel in creating intuitive and visually appealing user interfaces using Android Studio. My portfolio includes diverse projects showcasing my ability to build high-performance mobile applications for  Android platforms, leveraging my skills to deliver seamless and engaging user experiences.</p>
           
            </div>
          <div className='Box'style={{background : 'black'}}>
          <img src={bgImage2} alt="img" className='im0' />
          <h5 className='head' style={{color:'#03DAC6'}}>UI/UX</h5>
          < p style={{color:'#03DAC6'}}>I am a UI/UX designer skilled in creating visually appealing and user-friendly designs. I use Figma for designing intuitive interfaces and Canva for crafting engaging presentations. My expertise lies in enhancing user experiences through thoughtful design and clear, compelling visuals.</p>
           
          
          </div>
        </div>
      </div>
    </div>
  );
}
