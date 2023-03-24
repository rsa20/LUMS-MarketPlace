import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './product.css'
const Product = ({ image, name, price,status }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product">
      <img 
    style={{ maxWidth: "100%", marginBottom: "2%", borderRadius: "5%" }}

      src={image} alt={name} />
      <h3>{name}</h3>
      <div className='c-text'>

      <span className = "ext">
      <p style={{ marginLeft: "-30%", color: "#cc0000", fontWeight: "bold" }}>{price}</p>
      <p style={{ marginLeft: "-70%", color: "#cc0000" }}>{status}</p>
        </span>
        <span className='icons'>

                <FontAwesomeIcon
                    icon={isFavorite ? faHeartPulse : faHeart}
                    className={isFavorite ? 'favorite' : ''}
                    onClick={toggleFavorite}
                    style={{ color: 'red', fontSize: '2rem' }}

                />
        </span>
</div>
    </div>
  );
};

export default Product;
