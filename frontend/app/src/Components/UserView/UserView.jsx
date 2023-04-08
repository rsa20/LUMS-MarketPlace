import React from 'react';
import imgPlaceholder from './placeholderimg.jpg';
import './UserView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFlag as faFlagSolid } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSellerObj } from '../../Pages/Redux/Store.jsx';

const UserView = ({
  _id,
  email,
  name,
  user_name,
  profile_picture,
  date_created,
  flag,
  children,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultData = {
    _id: 'default',
    email: 'default',
    name: 'name',
    user_name: 'user_name',
    profile_picture: imgPlaceholder,
    date_created: 'default',
    flag: false,
  };

  const {
    _id: id_ = defaultData._id,
    email: email_ = defaultData.email,
    name: name_ = defaultData.name,
    user_name: user_name_ = defaultData.user_name,
    profile_picture: profile_picture_ = defaultData.profile_picture,
    date_created: date_created_ = defaultData.date_created,
    flag: flag_ = defaultData.flag,
    children: children_ = children,
  } = {
    _id,
    email,
    name,
    user_name,
    profile_picture,
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

  return (
    <div className='uv-userView-con' onClick={toSellerProfile}>
      <div className='uv-userView-start'>
        <h4 className='uv-userView-heading'>User{children_}</h4>
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
        className='uv-userView-imageContainer'
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
          src={profile_picture_}
          alt='profileImage'
          className='uv-userView-image'
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
      <div className='uv-subDiv'>
        <h4 className='uv-userView-id'>
          ID: <br />
          {id_}
        </h4>
        <h4 className='uv-userView-email'>
          EMAIL: <br />
          {email_}
        </h4>
      </div>
      <div className='uv-subDiv'>
        <h4 className='uv-userView-name'>
          NAME: <br />
          {name_}
        </h4>
        <h4 className='uv-userView-username'>
          USERNAME: <br />
          {user_name_}
        </h4>
      </div>
      <div className='uv-subDiv'>
        <h4 className='uv-userView-created'>
          CREATED: <br />
          {date_created_.split('T')[0]}
        </h4>
        <h4 className='uv-userView-flag'>
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

export default UserView;

// import React from 'react';
// import imgPlaceholder from './placeholderimg.jpg';
// import './UserView.css';

// const UserView = ({
//   _id,
//   email,
//   name,
//   user_name,
//   profile_picture,
//   date_created,
//   flag,
//   children,
// }) => {
//   const defaultData = {
//     _id: 'default',
//     email: 'default',
//     name: 'name',
//     user_name: 'user_name',
//     profile_picture: imgPlaceholder,
//     date_created: 'default',
//     flag: false,
//   };

//   const {
//     _id: id_ = defaultData._id,
//     email: email_ = defaultData.email,
//     name: name_ = defaultData.name,
//     user_name: user_name_ = defaultData.user_name,
//     profile_picture: profile_picture_ = defaultData.profile_picture,
//     date_created: date_created_ = defaultData.date_created,
//     flag: flag_ = defaultData.flag,
//     children: children_ = children,
//   } = {
//     _id,
//     email,
//     name,
//     user_name,
//     profile_picture,
//     date_created,
//     flag,
//     children,
//   };
//   return (
//     <div className='userView-con'>
//       <h2>User{children_}</h2>
//       <h4>ID: {id_}</h4>
//       <h4>EMAIL: {email_}</h4>
//       <h4>NAME: {name_}</h4>
//       <h4>USERNAME: {user_name_}</h4>
//       <div
//         style={{
//           width: '70px',
//           height: '70px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: '0 auto',
//         }}
//       >
//         <img
//           src={profile_picture_}
//           alt='profileImage'
//           style={{
//             borderRadius: '20px',
//             position: 'relative',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             top: '0',
//             left: '0',
//             bottom: '0',
//             right: '0',
//             margin: 'auto',
//           }}
//         />
//       </div>
//       <h4>CREATED: {date_created_.split('T')[0]}</h4>
//       <h4>FLAG: {flag_ && 'Flagged'}</h4>
//     </div>
//   );
// };

// export default UserView;
