import React from 'react';
import Product from './Products';
import he from './he.jpg';
import he1 from './he1.jpg';
import he2 from './he2.jpg';
import he3 from './he3.jpg';
import './product.css';
import Footer from './../../Components/Footer/Footer';
import Header from '../../Components/header/Header1';
// import Header from '../../Components/header/Header1';
// import Footer from '../../Components/Footer/Footer';
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: he3,
    price: 'RS:35000',
    status:"sold",

  },
  {
    id: 2,
    name: 'Product 2',
    image: he1,
    price: 'RS:45000',
    status:"instock",
  },
  {
    id: 3,
    name: 'Product 3',
    image: he2,
    price: 'RS:45000',
    status:"instock",

  },
  {
    id: 4,
    name: 'Product 4',
    image: he3,
    price: 'RS:45000',
    status:"sold",

  },
  {
    id: 5,
    name: 'Product 1',
    image: he,
    price: 'RS:35000',
    status:"sold",

  },
  {
    id: 6,
    name: 'Product 1',
    image: he1,
    price: 'RS:35000',
    status:"sold",

  },
  
];

const Home = () => {
  return (
    <>
    <Header/>
    <div className="products">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          status={product.status}
        />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import Product from './Products';
// import './product.css';
// import Footer from './../../Components/Footer/logo/Footer';
// import Header from '../../Components/header/Header1';

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('/api/products') // assuming the API endpoint for products data is /api/products
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="products">
//       {products.map((product) => (
//         <Product
//           key={product.id}
//           name={product.name}
//           image={product.image}
//           price={product.price}
//           status={product.status}
//         />
//       ))}
//     </div>
//   );
// };

// export default Home;
 