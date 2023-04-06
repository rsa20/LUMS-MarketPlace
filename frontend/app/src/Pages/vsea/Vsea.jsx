import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// import Vseaitem from './Vseaitem';
import Vseaitem from './Vseaitem';
import img from './img.jpg';
import './sea.css';
// import Vseaitem from './Vseaitem';
const Vsea = () => {
    const location = useLocation();

    const [vsea, setVsea] = useState([]);
    useEffect(() => {
        console.log(location.state, 'test');
        if (location.state) {
            setVsea(location.state.myfilter);
          console.log(vsea);
        }
      }, [location.state]);

  return (
    <div className='products'>
      {vsea.map((myfilter) => (
        <Vseaitem
          id={myfilter._id}
          title={myfilter.title}
          image={img}
          price={myfilter.price}
          // status={product.status}
        />
      ))}
    </div>  )
}

export default Vsea;