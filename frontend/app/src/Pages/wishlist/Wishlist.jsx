import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Wishitem from './Wishitem';
import img from './img.jpg';
import './wish.css';
const Wishlist = () => {
    const location = useLocation();

    const [wishlist, setwishlist] = useState([]);
    useEffect(() => {
        console.log(location.state, 'test');
        if (location.state) {
          setwishlist(location.state.mywish);
          console.log(wishlist);
        }
      }, [location.state]);

  return (
    <div className='products'>
      {wishlist.map((wish) => (
        <Wishitem
          id={wish._id}
          title={wish.title}
          image={img}
          price={wish.price}
          // status={product.status}
        />
      ))}
    </div>  )
}

export default Wishlist