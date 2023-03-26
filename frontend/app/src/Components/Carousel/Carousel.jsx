import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import he1 from './he1.jpg';
import he2 from './he2.jpg';
import he3 from './he3.jpg';
import './Carousel.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map(image => (
          <div key={image.id}>
            <img style={{width:"100%", height:"100%s"}} src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const images = [
  { id: 1, src: he1, alt: 'Image 1' },
  { id: 2, src: he2, alt: 'Image 2' },
  { id: 3, src: he3, alt: 'Image 3' }
];

function Carousel() {
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}

export default Carousel;
