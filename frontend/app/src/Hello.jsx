import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header1';
import Carousel from './Components/Carousel/Carousel';
// import Header from './Header';

export const Hello = () => {
  return (
    <div>
      <Header />
      <div>Hello</div>
      <Carousel></Carousel>
      {/*<Carousel></Carousel>
      <Carousel></Carousel>
      <Carousel></Carousel> */}
      <Footer />
    </div>
  );
};
export default Hello;
