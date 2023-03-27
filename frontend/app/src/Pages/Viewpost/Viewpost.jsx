import React from 'react'
import Carousel from '../../Components/Carousel/Carousel';
import './Viewpost.css';
import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

const Viewpost = () => {
    const location = useLocation();
    const [productDetails, setProduct] = useState('');
    useEffect(() => {
        console.log(location.state, "test");
        if (location.state) {
          setProduct(location.state.productDetails);
        }
      }, [location.state]);

  return (
    <div className="pmain">
        <div className="postmain">
            <div className="carm">
                <div className="car">
                    <Carousel style={{with:"100%", height:"100%"}}/>
                </div>
            </div>
            <div className="postcm">
                <div className="postc">
                    <h1 style={{marginLeft:'-5%'}}>{productDetails.name} </h1>
                    <h1 style={{marginLeft:'-65%'}}>{productDetails.price}</h1>
                    <div className="end" style={{display:'flex', justifyContent:"space-between"}}>
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

)
}

export default Viewpost