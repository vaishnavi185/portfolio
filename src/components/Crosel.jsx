import React from 'react';
import './Crosel.css';

export default function Crosel() {
  return (
    <div className='pro'>
     
      <div className='card'>
        <div className='im3'>
          <img src='./nani.png' alt='Description' />
        </div>
        <div className='content'>
          <h2>PIZZA</h2>
          <p>A dynamic MERN stack e-commerce platform for pizza lovers. Features include user login, sign-up, food ordering, and purchasing. Customize your pizza with diverse toppings and crust options, and enjoy secure online payments. Satisfy your pizza cravings with ease!</p>
          <br></br>
          <span>Github: <a href='https://github.com/vaishnavi185/e-commerce' target='_blank' rel='noopener noreferrer'>https://github.com/vaishnavi185/e-commerce</a></span>
        </div>
      </div>
      <div className='card'>
        <div className='im3'>
          <img src='./nani.png' alt='Description' />
        </div>
        <div className='content'>
          <h2>Nainital Culture Hub</h2>
          <p>Nainital Culture Hub: A vibrant MERN stack website showcasing Nainital's rich cultural heritage. Explore traditional arts, festivals, and local cuisine. Users can create accounts, log in, and sign up to access exclusive content, participate in forums, and connect with the community. Celebrate and preserve Nainital's unique cultural legacy online.</p>
          <br></br>
          <span>Github: <a href='https://github.com/vaishnavi185/culture' target='_blank' rel='noopener noreferrer'>https://github.com/vaishnavi185/culture</a></span>
        </div>
      </div>
      <div className='card'>
        <div className='im3'>
          <img src='./quize.png' alt='Description' />
        </div>
        <div className='content'>
          <h2>QUIZE-APP</h2>
          <p>An interactive web-based quiz application built with JavaScript, HTML, and CSS. Features a variety of questions on different topics, real-time score counting, and instant feedback. Users can start a new quiz, track their scores, and challenge themselves with progressively harder questions. Perfect for learning and fun!

</p>
          <br></br>
          <span>Github: <a href='https://github.com/vaishnavi185/quize' target='_blank' rel='noopener noreferrer'>https://github.com/vaishnavi185/quize</a></span>
        </div>
      </div>
    </div>
  );
}
