import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import SellerPHead from '../../Components/SellerPHead/SellerPHead';
import img from './placeholderimg.jpg';
import { useLocation } from 'react-router-dom';

const SellerViewP = () => {
  const location = useLocation();
  const [user, setUser] = useState('');

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
    }
  }, [location.state]);
  console.log(user, 'hello this is user in seller profile');

  return (
    <div>
      <Header></Header>
      <SellerPHead />
      {/* <h1>SellerViewP</h1> */}
      <div className='profile'>
        <div className='pro'>
          <div className='pic'>
            <img
              className='im'
              style={{ borderRadius: '10%' }}
              src={img}
              alt='user-pic'
            />
          </div>
          <div className='co'>
            <p>Name</p>
            <h2>{user.name}</h2>
            {/* <h2>Talha Bhatti</h2> */}
            <p>Email</p>
            <h2>{user.email}</h2>
            {/* <h2>Talha_Bhatti@lums.edu.pk</h2> */}
            <p>Account</p>
            <h2>Users</h2>
            {/* <span className="rev"> */}
            <span>
              <span style={{ fontSize: '130%' }}>Post</span>
            </span>
            <span>
              <span style={{ fontSize: '130%', marginLeft: '8%' }}>Review</span>
            </span>
            <div>
              <span>
                <span style={{ fontSize: '130%', fontWeight: 'bold' }}>60</span>
              </span>
              <span>
                <span
                  style={{
                    fontSize: '130%',
                    marginLeft: '8%',
                    fontWeight: 'bold',
                  }}
                >
                  100
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
