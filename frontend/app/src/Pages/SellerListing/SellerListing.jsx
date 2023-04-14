import React, { useEffect, useState } from 'react';
import Product from '../H2/Products';
import '../H2/product.css';
import Footer from './../../Components/Footer/Footer';
import Header from '../../Components/header/Header1';
import PHeader from '../../Components/SellerPHead/SellerPHead';

import { useSelector } from 'react-redux';

const Listings = () => {
  const [products, setProducts] = useState([]);
  const sellerObj = useSelector((state) => state.sellerObj.sellerObj).user;

  useEffect(() => {
    fetch(`https://good-tan-woodpecker-wrap.cyclic.app/api/posts/getSellerPosts${sellerObj._id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'test');
        setProducts(data);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <>
      <Header />
      <PHeader page='L' />
      {/* <h1>Ads</h1> */}
      <div className='products' style={{ padding: '2.5vw 1vw' }}>
        {products.map((product) => (
          <Product {...product} key={product._id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Listings;
