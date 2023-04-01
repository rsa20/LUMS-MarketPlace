import React from 'react';
// import Carousel from '../../Components/Carousel/Carousel';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import './Viewpost.css';
import he1 from './he1.jpg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

const Viewpost = () => {
  const location = useLocation();
  const [productDetails, setProduct] = useState('');
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  console.log(userEmail, "user");
  useEffect(() => {
    console.log(location.state, 'test');
    if (location.state) {
      setProduct(location.state.productDetails);
    }
  }, [location.state]);

  return (
    <>
      <Header />
      <div className='pmain'>
        <div className='postmain'>
          <div className='carm'>
            <div
              className='carousel-container'
              style={{
                backgroundImage: `url(${he1})`,
                height: '300px',
                width: '300px',
                borderRadius: '20px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* <Carousel style={{ with: '100%', height: '100%' }} /> */}
            </div>
          </div>
          <div className='postcm'>
            <div className='postc'>
              <h1 style={{ marginLeft: '-5%' }}>{productDetails.title} </h1>
              <h1 style={{ marginLeft: '-65%' }}>{productDetails.price}</h1>
              <div
                className='end'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>
                  <h2>Posted By</h2>
                  <h1>{productDetails.id}</h1>
                </div>
                <div>
                  <button>Contact</button>
                </div>
                <div>
                  <p>{productDetails.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Viewpost;
