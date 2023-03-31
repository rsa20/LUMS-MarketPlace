import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header1';
import Review from './Components/Review/Review';
// import Header from './Header';

export const Hello = () => {
  return (
    <div>
      <Review
        reviwerName='Abdul'
        reviewText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, aliquid nesciunt a '
        reviewScore={2}
        reviewerImg={false}
      />
    </div>
  );
};
export default Hello;
