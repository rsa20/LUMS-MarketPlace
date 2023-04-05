import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Header from '../../Components/header/Header1';
import ProfileHeader from '../../Components/Phead/Fh';
import Footer from '../../Components/Footer/Footer';
import './Viewpost.css';
// import he1 from './he1.jpg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Viewpost = () => {
  const location = useLocation();
  const [productDetails, setProduct] = useState('');
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  console.log(userEmail, 'logged in user');

  const navigate = useNavigate()

  useEffect(() => {
    console.log(location.state, 'test');
    if (location.state) {
      setProduct(location.state.productDetails);
    }
  }, [location.state]);
  const flag = productDetails.state;
  console.log("flag: ",flag);

  // '/viewProfile/:id'
  console.log(productDetails, "checking")
  const sellerName = productDetails.sellerName
  const seller_id = productDetails.user
  
  // const sellerName = productDetails.sellerData.name
  // console.log(sellerName)
  // const seller = 
  //get details of seller: 
  // const seller = fetch(`http://localhost:1000/api/goals/viewProfile/user${seller_id}`);
  // console.log(seller)
  const onSellerClick = (sellerId) => {
    
    console.log('hello il get you to the seller profile page', sellerId);
  };

  const onEditClick = () => {
    navigate('/Editpost', { state: { productDetails} });
  }
  return (
    <>
      <Header />
      <ProfileHeader />
      <div className='pmain'>
        <div className='postmain'>
          <div className='carm'>
            <div
              className='carousel-container'
              // style={{
              //   backgroundImage: `url(${he1})`,
              //   height: '300px',
              //   width: '300px',
              //   borderRadius: '20px',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundSize: 'cover',
              //   backgroundPosition: 'center',
              // }}
            >
              <Carousel style={{ with: '100%', height: '100%' }} />
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
                  <h1 onClick={() => onSellerClick(seller_id)}>{sellerName}</h1>
                  
                </div>
                <div>
                  <button>Contact</button>
                </div>
                <div>
                  <p>{productDetails.description}</p>
                </div>
                {/* { if(flag == true){
                <button>Edited Profile</button>


                }} */}
                {flag === true && <button onClick={() => onEditClick()}>Edit Post</button>}
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
