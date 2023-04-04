import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './wish.css';

const Wishitem = ({ id, title, image, price }) => {
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  console.log(userEmail, 'user');
  console.log(title, 'asdjfbajksdfbsajdfk');
//   const [isFavorite, setIsFavorite] = useState(false);
//   const navigate = useNavigate();

//   const toggleFavorite = () => {
//     setIsFavorite(!isFavorite);
//   };
//   const handleHeart = async (newID, email) => {
//     console.log({ newID, email });
//     if (!isFavorite) {
//       const response = await fetch(
//         `/api/wishlist/addtowishlist/product/${newID}/user/${email}`
//       );
//       const data = await response.json();
//       console.log(data);
//     } else if (isFavorite) {
//       const response = await fetch(
//         `/api/wishlist/removefromwishlist/product/${newID}/user/${email}`
//       );
//       const data = await response.json();
//       console.log(data);
//     }
//   };
//   const handleClick = async (newID, email) => {
//     console.log(newID, 'asdasdm');
//     // console.log(test, "safsafd")
//     const response = await fetch(`/api/posts/product${newID} ${email}`);

//     const data = await response.json();
//     const { id, title, description, price, state } = data;

//     // const imageUrls = images.map((image) => image.url);
//     const productDetails = { title, description, id, price, state };
//     console.log(productDetails);
//     navigate('/viewpost', { state: { productDetails } });
    // navigate({
    //   pathname: '/viewpost',
    //   state: { productDetails }
    // });
//   };

  return (
    <div className='product'>
      <img
        // onClick={() => handleClick(id)}
        style={{ maxWidth: '100%', marginBottom: '2%', borderRadius: '5%' }}
        src={image}
        alt={title}
      />
      <h3 >{title}</h3>
      <div className='c-text'>
        <span className='ext' >
          <p
            style={{ marginLeft: '-30%', color: '#cc0000', fontWeight: 'bold' }}
          >
            {price}
          </p>
          {/* <p style={{ marginLeft: "-70%", color: "#cc0000" }}>{status}</p> */}
        </span>
        <span className='icons' >
          <FontAwesomeIcon
            icon={faHeartPulse}
            // className={isFavorite ? 'favorite' : ''}
            // onClick={toggleFavorite}
            style={{ color: 'red', fontSize: '2rem' }}
          />
        </span>
      </div>
    </div>
  );
};

export default Wishitem;