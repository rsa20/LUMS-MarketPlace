import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './product.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = ({ id, title, image, price }) => {
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  // console.log(loggedInUser._id, 'user2');
  // console.log(userEmail, 'user');
  // console.log(title, 'asdjfbajksdfbsajdfk');
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleHeart = async (newID, email) => {
    console.log({ newID, email });
    if (!isFavorite) {
      const response = await fetch(
        `/api/wishlist/addtowishlist/product/${newID}/user/${email}`
      );
      const data = await response.json();
      console.log(data);
    } else if (isFavorite) {
      const response = await fetch(
        `/api/wishlist/removefromwishlist/product/${newID}/user/${email}`
      );
      const data = await response.json();
      console.log(data);
    }
  };
  const handleClick = async (newID, user_id) => {
    console.log(newID, 'asdasdm');
    // console.log(test, "safsafd")
    const response = await fetch(`/api/posts/product${newID}/${user_id}`);

    const data = await response.json();
    const { _id, title, description, price, user } = data.post;
    const state = data.myPost;
    // console.log(data, 'tester')
    // const imageUrls = images.map((image) => image.url);
    const seller = await fetch(`/api/goals/viewProfile/user${user}`);
    const sellerName = (await seller.json()).name;

    console.log(sellerName, "seller")

    const productDetails = {
      title,
      description,
      _id,
      price,
      state,
      user,
      sellerName,
    };
    console.log(productDetails, 'prod details');
    navigate('/viewpost', { state: { productDetails } });
    // navigate({
    //   pathname: '/viewpost',
    //   state: { productDetails }
    // });
  };

  return (
    <div className='product'>
      <img
        onClick={() => handleClick(id, loggedInUser._id)}
        style={{ maxWidth: '100%', marginBottom: '2%', borderRadius: '5%' }}
        src={image}
        alt={title}
      />
      <h3 onClick={() => handleClick(id, loggedInUser._id)}>{title}</h3>
      <div className='c-text'>
        <span className='ext' onClick={() => handleClick(id, loggedInUser._id)}>
          <p
            style={{ marginLeft: '-30%', color: '#cc0000', fontWeight: 'bold' }}
          >
            {price}
          </p>
          {/* <p style={{ marginLeft: "-70%", color: "#cc0000" }}>{status}</p> */}
        </span>
        <span className='icons' onClick={() => handleHeart(id, userEmail)}>
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
