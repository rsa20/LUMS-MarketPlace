import React from 'react';
import imgPlaceholder from './placeholderimg.jpg';
import './PostAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFlag as faFlagSolid } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSellerObj } from '../../Pages/Redux/Store.jsx';

const PostAdmin = ({
  _id,
  title,
  seller,
  user,
  img_URL,
  date_created,
  flag,
  children,
}) => {
  console.log('here,', img_URL);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultData = {
    _id: 'default',
    title: 'default',
    seller: 'default',
    user: 'default',
    // img_URL: [imgPlaceholder],
    date_created: 'default',
    flag: false,
  };

  const {
    _id: id_ = defaultData._id,
    title: title_ = defaultData.title,
    seller: seller_ = defaultData.seller,
    user: user_ = defaultData.user,
    // img_URL: img_URL_ = defaultData.img_URL,
    date_created: date_created_ = defaultData.date_created,
    flag: flag_ = defaultData.flag,
    children: children_ = children,
  } = {
    _id,
    title,
    seller,
    user,
    // img_URL,
    date_created,
    flag,
    children,
  };

  const toSellerProfile = () => {
    axios
      .get(`api/goals/viewProfile/user${id_}`)
      .then((res) => {
        // console.log(res.data);
        dispatch(setSellerObj({ user: res.data }));
        navigate('/SellerViewP');
      })
      .catch((error) => console.error('Profile showing error : ', error));
  };

  var img_URL_ = imgPlaceholder;
  if (img_URL.length !== 0) {
    img_URL_ = img_URL[0];
  }
  console.log('69 ', img_URL_);

  return (
    <div className='pv-userView-con'>
      <div className='pv-userView-start'>
        <h4 className='pv-userView-heading'>Post{children_}</h4>
        <button
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
          src={img_URL_}
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
      <div className='pv-subDiv'>
        <h4 className='pv-userView-id'>
          ID: <br />
          {id_}
        </h4>
        <h4 className='pv-userView-email' style={{ color: '#cc0505' }}>
          TITLE: <br />
          {title_}
        </h4>
      </div>
      <div className='pv-subDiv'>
        <h4 className='pv-userView-name'>
          SELLER username: <br />
          {seller_}
        </h4>
        <h4 className='pv-userView-username'>
          SELLER ID: <br />
          {user_}
        </h4>
      </div>
      <div className='pv-subDiv'>
        <h4 className='pv-userView-created'>
          CREATED: <br />
          {date_created_.split('T')[0]}
        </h4>
        <h4 className='pv-userView-flag'>
          FLAG: <br />
          {/* {flag_ && 'Flagged'} */}
          {flag_ ? (
            <FontAwesomeIcon
              className='icon-star'
              icon={faFlagSolid}
              style={{
                color: '#cc0505',
                margin: '0 0.07rem',
                fontSize: '12px',
              }}
            />
          ) : (
            <FontAwesomeIcon
              className='icon-star'
              icon={faFlag}
              style={{
                color: '#00ff40',
                margin: '0 0.07rem',
                fontSize: '12px',
              }}
            />
          )}
        </h4>
      </div>
    </div>
  );
};

export default PostAdmin;
