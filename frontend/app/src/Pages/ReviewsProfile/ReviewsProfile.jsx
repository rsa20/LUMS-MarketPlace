import React from 'react';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import Review from '../../Components/Review/Review';

const data = {
  reviewerName: 'Abdul',
  reviewText: 'rulaye ga kya ',
  reviewScore: 4,
  reviewerImg: false,
};

const ReviewsProfile = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Reviews Page</h1>
        <Review
          reviewerName={data.reviewerName}
          reviewScore={data.reviewScore}
          reviewText={data.reviewText}
        />
      </div>
      <Footer />
    </>
  );
};

export default ReviewsProfile;
