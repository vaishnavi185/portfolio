import React from 'react';
import './Crosel.css';

export default function Crosel() {
  return (
    <div className='card'>
      <div className='im3'>
        <img src='./nani.png' alt='Description' />
      </div>
      <div className='content'>
        <h2>Card Title</h2>
        <p>This is some sample content for the card. You can add more details here.</p>
      </div>
    </div>
  );
}
