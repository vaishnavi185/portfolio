// CarouselComponent.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const items = [
  {
    img: 'https://via.placeholder.com/300',
    content: 'Item 1',
  },
  {
    img: 'https://via.placeholder.com/300',
    content: 'Item 2',
  },
  {
    img: 'https://via.placeholder.com/300',
    content: 'Item 3',
  },
  {
    img: 'https://via.placeholder.com/300',
    content: 'Item 4',
  },
  {
    img: 'https://via.placeholder.com/300',
    content: 'Item 5',
  },
];

const CarouselComponent = () => {
  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {items.map((item, index) => (
        <div key={index} style={{ padding: '1px' }}>
          <img src={item.img} alt={`Slide ${index}`} style={{ width: '60%' }} />
          <p>{item.content}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
