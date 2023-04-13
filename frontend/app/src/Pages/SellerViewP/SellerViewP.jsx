import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import SellerPHead from '../../Components/SellerPHead/SellerPHead';
import img from './placeholderimg.jpg';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SellerViewP = () => {
  // const location = useLocation();
  // const [user, setUser] = useState('');
  // useEffect(() => {
  //   if (location.state) {
  //     setUser(location.state.user);
  //   }
  // }, [location.state]);
  const seller = useSelector((state) => state.sellerObj.sellerObj).user;
  const [accStatus, setAccStatus] = useState('User');

  console.log(seller, 'hello this is user in seller profile');
  const [info, setInfo] = useState({
    posts: 0,
    reviews: 0,
  });

  useEffect(() => {
    const getInfoRP = async (userId) => {
      try {
        const response = await fetch(`api/goals/infoRP/${userId}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user info');
      }
    };
    getInfoRP(seller._id)
      .then((data) => {
        setInfo(data);
        // console.log(data); // { posts: 5, reviews: [{...}, {...}, ...] }
      })
      .catch((error) => {
        console.error(error); // Failed to fetch user info
      });

    axios
      .get('api/admin/getAdmin')
      .then((response) => {
        // res.data is admin id here
        if (response.data === seller._id) {
          console.log('Admin', response.data);
          setAccStatus('Admin');
        }
      })
      .catch((err) => {
        console.error('admin call catch: ', err);
      });
  }, [seller]);

  console.log(info, 'info here');

  let imgShow = img;
  if (seller.profile_picture !== null) {
    imgShow = seller.profile_picture;
  }

  return (
    <div>
      <Header></Header>
      {/* <SellerPHead id={user._id} /> */}
      <SellerPHead page='P' />
      {/* <h1>SellerViewP</h1> */}
      <div className='profile'>
        <div className='pro'>
          <div className='pic'>
            <img
              className='im'
              style={{ borderRadius: '10%' }}
              src={imgShow}
              alt='user-pic'
            />
          </div>
          <div className='co'>
            <p>Name</p>
            <h2>{seller.name}</h2>
            {/* <h2>Talha Bhatti</h2> */}
            <p>Email</p>
            <h2>{seller.email}</h2>
            {/* <h2>Talha_Bhatti@lums.edu.pk</h2> */}
            <p>Account</p>
            <h2>{accStatus}</h2>
            {/* <span className="rev"> */}
            <span>
              <span style={{ fontSize: '130%' }}>Posts</span>
            </span>
            <span>
              <span style={{ fontSize: '130%', marginLeft: '8%' }}>
                Reviews
              </span>
            </span>
            <div>
              <span>
                <span style={{ fontSize: '130%', fontWeight: 'bold' }}>
                  {info.posts}
                </span>
              </span>
              <span>
                <span
                  style={{
                    fontSize: '130%',
                    marginLeft: '8%',
                    fontWeight: 'bold',
                  }}
                >
                  {info.reviews}
                </span>
              </span>
            </div>
            {/* </span> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SellerViewP;
