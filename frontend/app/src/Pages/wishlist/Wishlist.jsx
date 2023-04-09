import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Wishitem from './Wishitem';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';

import img from './img.jpg';
import './wish.css';
const Wishlist = () => {
  const location = useLocation();

  const [wishlist, setwishlist] = useState([]);
  useEffect(() => {
    console.log(location.state, 'test');
    if (location.state) {
      setwishlist(location.state.mywish);
      console.log('herer in wishlidt ', wishlist);
    }
  }, [wishlist]);

  return (
    <>
      <Header></Header>
      {/* <h1 style={{ fontFamily: 'Poppins', color: '#1c0040' }}>
        WishList Items
      </h1> */}
      <div className='products' style={{ padding: '2vw 7vw' }}>
        {wishlist.map((wish) => (
          <Wishitem
            id={wish._id}
            title={wish.title}
            image={img}
            price={wish.price}
            // status={product.status}
          />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Wishlist;
