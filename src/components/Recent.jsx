import React from 'react';
import './rec.css';
import  CarouselComponent from './Crosel'

export default function Recent() {
  return (
    <div className='boxx'>
      <img src='./image1.png' alt='Recent work'className='imo'></img>
    
      <h3>Recent works</h3>
      <br></br>
      <div className='tabs'>
        <div className='tab1'>
          <span>includes:</span>
        </div>
        <div className='tab'>
          <h4>Website</h4>
          <h4>APP</h4>
        </div>
      </div>
      < CarouselComponent></CarouselComponent>
      <img src='./Image.png' alt='Recent work'className='im9'></img>
    </div>
  );
}
