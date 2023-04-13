import React from 'react';
import './PostAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag as faFlagSolid } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import imgPlaceholder from './placeholderimg.jpg';

// import { faFlag } from '@fortawesome/free-regular-svg-icons';
// import { useDispatch } from 'react-redux';
// import { setSellerObj } from '../../Pages/Redux/Store.jsx';

const PostAdmin = ({
  _id,
  title,
  seller,
  user,
  img_URL,
  date_created,
  flags,
  price,
  description,
  children,
  onDelete,
}) => {
  // console.log('here,', img_URL);
  const navigate = useNavigate();
  const defaultData = {
    _id: 'default',
    title: 'default',
    seller: 'default',
    user: 'default',
    img_URL: [imgPlaceholder],
    date_created: 'default',
    flags: 0,
    price: 0,
    description: 'default',
  };

  const {
    _id: id_ = defaultData._id,
    title: title_ = defaultData.title,
    seller: seller_ = defaultData.seller,
    user: user_ = defaultData.user,
    // img_URL: img_URL_ = defaultData.img_URL,
    date_created: date_created_ = defaultData.date_created,
    flags: flags_ = defaultData.flag,
    price: price_ = defaultData.price,
    description: description_ = defaultData.description,
    children: children_ = children,
  } = {
    _id,
    title,
    seller,
    user,
    // img_URL,
    date_created,
    flags,
    price,
    description,
    children,
  };

  // console.log(img_URL[0]);
  var img_URL_ = defaultData.img_URL;
  if (img_URL.length !== 0) {
    img_URL_ = img_URL;
  }

  // console.log('69 ', img_URL_);
  const onClickHandlerr = () => {
    console.log('here');
    const productDetails = {
      title: title_,
      description: description_,
      _id: id_,
      price: price_,
      state: false,
      user: user_,
      sellerName: seller_,
      img_URL: img_URL_,
    };
    console.log(productDetails, 'here prod details');
    navigate('/viewpost', { state: { productDetails } });
  };

  const handleDeleteClick = async (postId) => {
    try {
      const response = await fetch(`api/posts/deletePost/${postId}`);
      const data = await response.json();
      console.log(data.message); // Post successfully deleted from all collections.
      // Add any other necessary logic after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error cases here, e.g. show an error message to the user
    }
    onDelete();
  };

  return (
    <div className='pv-userView-con'>
      <div className='pv-userView-start'>
        <h4 className='pv-userView-heading' onClick={onClickHandlerr}>
          Post{children_}
        </h4>
        <button
          onClick={() => {
            handleDeleteClick(_id);
          }}
          style={{
            color: '#fffffa',
            fontFamily: 'inherit',
            backgroundColor: 'rgb(204, 0, 0)',
            fontSize: '12px',
            borderRadius: '10px',
          }}
        >
          Delete
        </button>
      </div>
      <div
        className='pv-userView-imageContainer'
        onClick={onClickHandlerr}
        style={{
          width: '70px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <img
          src={img_URL_[0]}
          alt='profileImage'
          className='pv-userView-image'
          style={{
            borderRadius: '20px',
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',
          }}
        />
      </div>
      <div className='pv-subDiv' onClick={onClickHandlerr}>
        <h4 className='pv-userView-id'>
          ID: <br />
          {id_}
        </h4>
        <h4 className='pv-userView-email' style={{ color: '#cc0505' }}>
          TITLE: <br />
          {title_}
        </h4>
      </div>
      <div className='pv-subDiv' onClick={onClickHandlerr}>
        <h4 className='pv-userView-name'>
          SELLER username: <br />
          {seller_}
        </h4>
        <h4 className='pv-userView-username'>
          SELLER ID: <br />
          {user_}
        </h4>
      </div>
      <div className='pv-subDiv' onClick={onClickHandlerr}>
        <h4 className='pv-userView-created'>
          CREATED: <br />
          {date_created_.split('T')[0]}
        </h4>
        <h4 className='pv-userView-flag'>
          FLAG: <br />
          {flags_ === 0
            ? 'No flagged'
            : new Array(flags_).fill(null).map(() => {
                return (
                  <FontAwesomeIcon
                    className='icon-star'
                    icon={faFlagSolid}
                    style={{
                      color: '#cc0505',
                      margin: '0 0.07rem',
                      fontSize: '12px',
                    }}
                  />
                );
              })}
        </h4>
      </div>
    </div>
  );
};

export default PostAdmin;
