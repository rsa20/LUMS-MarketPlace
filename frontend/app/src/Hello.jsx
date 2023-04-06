import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header1';
// import AddReview from './Components/AddReview/AddReview';
import CarouselExp from './Components/CarouselExp/CarouselExp';
import Carousel from './Components/Carousel/Carousel';
import i1 from './Components/Carousel/he1.jpg';
import i2 from './Components/Carousel/he2.jpg';
import i3 from './Components/Carousel/he3.jpg';
// import Review from './Components/Review/Review';

export const Hello = () => {
  return (
    <div>
      {/* <Review
        reviwerName='Abdul'
        reviewText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, aliquid nesciunt a '
        reviewScore={2}
        reviewerImg={false}
      /> */}
      <Header></Header>
      <Carousel />
      <Footer></Footer>
    </div>
  );
};
export default Hello;
