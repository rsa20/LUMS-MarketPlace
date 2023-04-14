import React from 'react';
import axios from 'axios';
import Carousel from '../../Components/Carousel/Carousel';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import './Viewpost.css';
import placeholder from '../H2/placeholderimg.jpg';
// import he1 from './he1.jpg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setSellerObj } from '../Redux/Store.jsx';

const Viewpost = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [productDetails, setProduct] = useState({
    title: 'default',
    description: 'default',
    _id: 'default',
    price: 0,
    state: false,
    user: 'default',
    sellerName: 'default',
    img_URL: [],
  });
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  const loggedInUserId = useSelector((state) => state.userObj.userObj)._id;

  console.log(userEmail, 'logged in user');

  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state, 'test');
    if (location.state) {
      setProduct(location.state.productDetails);
    }
  }, [location.state]);
  console.log('pd', productDetails);
  const flag = productDetails.state;
  console.log('flag: ', flag);

  // '/viewProfile/:id'
  console.log(productDetails, 'checking');
  const sellerName = productDetails.sellerName;
  const seller_id = productDetails.user;

  // const sellerName = productDetails.sellerData.name
  // console.log(sellerName)
  // const seller =
  //get details of seller:
  // const seller = fetch(`http://localhost:1000/api/goals/viewProfile/user${seller_id}`);
  // console.log(seller)
  const onSellerClick = (sellerId) => {
    // console.log('seller id: ', sellerId);
    // console.log(`logged in user user e : ${userEmail}`);
    axios
      .get(`api/posts/userByPost/${sellerId}`)
      .then((res) => {
        // can add res 200 500 404 scnz
        // console.log(res.data.user._id === loggedInUserId);
        if (res.data.user._id === loggedInUserId) {
          navigate(`/viewp`, { state: res.data });
        } else {
          dispatch(setSellerObj(res.data));
          navigate('/SellerViewP');
        }
      })
      .catch((error) => console.error('Profile showing error : ', error));
  };

  const onEditClick = () => {
    navigate('/Editpost', { state: { productDetails } });
  };

  console.log(productDetails.img_URL.length);
  let imgshow = [placeholder];
  if (productDetails.img_URL.length > 0) {
    imgshow = productDetails.img_URL;
  }
  return (
    <>
      <Header />
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
              <Carousel style={{ background: '#ac1616' }} productDetails={productDetails} />
            </div>
          </div>
          <div className='postcm'>
            <div className='postc'>
              <h1>{productDetails.title} </h1>
              <h1>{productDetails.price}</h1>
              <div className='end'>
                <div>
                  <h2>Posted By</h2>
                  <h1
                    style={{ textDecoration: 'underline', color: '#1c0040' }}
                    onClick={() => onSellerClick(seller_id)}
                  >
                    {sellerName}
                  </h1>
                </div>
                <div>
                  <button>
                    <a
                      href={productDetails.sellerProfile}
                      target='blank'
                      style={{
                        textDecoration: 'none',
                        color: '#fffffa',
                        fontFamily: 'inherit',
                      }}
                    >
                      Contact
                    </a>
                  </button>
                </div>
                <div>
                  <p>{productDetails.description}</p>
                </div>
                {/* { if(flag == true){
                <button>Edited Profile</button>
                }} */}
                {flag === true && (
                  <button onClick={() => onEditClick()}>Edit Post</button>
                )}
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
