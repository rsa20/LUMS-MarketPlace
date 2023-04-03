import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header1';
import AddReview from './Components/AddReview/AddReview';
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
      <AddReview></AddReview>

      <Footer></Footer>
    </div>
  );
};
export default Hello;
