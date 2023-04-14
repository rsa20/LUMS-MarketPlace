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
    cssEase: 'linear',
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

function Carousel(props) {
  const productDetails = props.productDetails;
  console.log(productDetails.img_URL[0])
  let images = []
  // const images = [
  //   { id: 1, src: productDetails.img_URL[0], alt: 'Image 1' },
  //   { id: 2, src: productDetails.img_URL[1], alt: 'Image 2' },
  //   { id: 3, src: productDetails.img_URL[2], alt: 'Image 3' },
  // ];
  for(let i = 0; i < productDetails.img_URL.length; i++){
    images.push({id:i+1, src:productDetails.img_URL[i], alt: `Image ${i+1}`})
  }

  return (
    <div className='App'>
      <ImageCarousel images={images} />
    </div>
  );
}

export default Carousel;
