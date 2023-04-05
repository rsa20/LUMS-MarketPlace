import React, { useState } from 'react';

const CarouselExp = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = (direction) => {
    const totalImages = images.length;
    let newIndex = currentImage;

    if (direction === 'prev') {
      newIndex = (currentImage - 1 + totalImages) % totalImages;
    } else {
      newIndex = (currentImage + 1) % totalImages;
    }

    setCurrentImage(newIndex);
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='carousel-container' style={{ backgroundColor: 'pink' }}>
      <div
        className='carousel-wrapper'
        style={{ width: '200px', height: '200px' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentImage ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${image})`, ...imageStyle }}
          ></div>
        ))}
        <button
          className='carousel-btn prev'
          onClick={() => handleClick('prev')}
        >
          &#8249;
        </button>
        <button
          className='carousel-btn next'
          onClick={() => handleClick('next')}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CarouselExp;

// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function CarouselExp() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src='holder.js/800x400?text=First slide&bg=373940'
//           alt='First slide'
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src='holder.js/800x400?text=Second slide&bg=282c34'
//           alt='Second slide'
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src='holder.js/800x400?text=Third slide&bg=20232a'
//           alt='Third slide'
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselExp;
// // render(<CarouselExp />);
