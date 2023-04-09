import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import he1 from './he1.jpg';

import './wish.css';

const Wishitem = ({ _id, title, img_URL, price }) => {
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

    console.log(sellerName, 'seller');

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
  var img_URL_ = he1;
  if(img_URL){
    if (img_URL.length !== 0) {
      img_URL_ = img_URL[0];
    }
  }
  return (
    <div className='product-main'>
      <div
        className='product-img-con'
        // style={{ width: '234px', height: '234px' }}
      >
        <img
          className='product-img'
          onClick={() => handleClick(_id, loggedInUser._id)}
          // style={{ maxWidth: '100%', marginBottom: '2%', borderRadius: '5%' }}
          src={img_URL_}
          alt={title}
        />
      </div>
      <h3 onClick={() => handleClick(_id, loggedInUser._id)}>{title}</h3>
      <div className='c-text'>
        <span
          className='ext'
          onClick={() => handleClick(_id, loggedInUser._id)}
        >
          <p style={{ color: '#cc0000', fontWeight: 'bold' }}>{price}Rs</p>
          {/* <p style={{ marginLeft: "-70%", color: "#cc0000" }}>{status}</p> */}
        </span>
        <span className='icons' onClick={() => handleHeart(_id, userEmail)}>
          <FontAwesomeIcon
            icon={isFavorite ? faHeartPulse : faHeart}
            className={isFavorite ? 'favorite' : ''}
            onClick={toggleFavorite}
            style={{ color: 'red', fontSize: '2vw' }}
          />
        </span>
      </div>
    </div>
  );
};

export default Wishitem;