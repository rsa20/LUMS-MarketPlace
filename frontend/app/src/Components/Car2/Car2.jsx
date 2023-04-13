import React, { useState } from 'react';

const Car2 = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className='car2'>
      <div className='car2-slide'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`car2-item ${index === activeIndex ? 'active' : 'i'}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className='car2-prev' onClick={handlePrevClick}>
        Prev
      </button>
      <button className='car2-next' onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Car2;
