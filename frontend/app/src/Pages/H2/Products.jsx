import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './product.css';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, image, title, price, status }) => {
  // console.log("asdjfbajksdfbsajdfk")
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleClick = async () => {
    try {
      const response = await fetch(`/api/posts/product${id}`);
      const data = await response.json();
      const {_id, title, description , price } = data;
      // const imageUrls = images.map((image) => image.url);
      const productDetails = { title, description, _id, price};
      console.log(productDetails)
      navigate({
        pathname: '/viewpost',
        state: { productDetails }
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="product" onClick={handleClick}>
      <img style={{ maxWidth: "100%", marginBottom: "2%", borderRadius: "5%" }} src={image} alt={title} />
      <h3>{title}</h3>
      <div className='c-text'>
        <span className="ext">
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
