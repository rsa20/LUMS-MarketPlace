import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Car2.css';

const Car2 = ({ images }) => {
  console.log(images);
  return (
    <Carousel>
      {images.map((image) => {
        return (
          <Carousel.Item>
            <img
              className='carousel-img d-block w-100'
              src={image}
              alt='First slide'
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Car2;
