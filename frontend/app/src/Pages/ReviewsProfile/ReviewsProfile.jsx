import React from 'react';
// import { useState, useEffect } from 'react';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import Review from '../../Components/Review/Review';
import pImg from './pimage.jpg';
import p2Img from './p2image.jpg';

// const ReviewsProfile = () =>
//   /*{
//     userEmail
//   }*/

const ReviewsProfile = () => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch(`/api/reviews/${userEmail}`);
  //       const data = await response.json();
  //       setReviews(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchReviews();
  // }, [userEmail]);
  const reviews = [
    {
      reviewerName: 'Abdul',
      reviewScore: 3,
      reviewText: 'hello i under the water. Please Help me!',
    },
    {
      reviewerName: 'Talha1',
      reviewScore: 1,
      reviewText: 'Udhr hi reh no Help',
      reviewerImg: p2Img,
    },
    {
      reviewerName: 'Talha2',
      reviewScore: 4,
      reviewText: 'Udhr hi reh no Help',
      reviewerImg: pImg,
    },
    {
      reviewerName: 'Abdullah',
      reviewScore: 3,
      reviewText: 'mujhe anday wala burger chahiye',
      reviewerImg: pImg,
    },
  ];
  const allReviews = reviews.map((review) => <Review {...review} />);
  return (
    <>
      <Header />
      <div>
        <h1>Reviews Page</h1>
        {allReviews}
      </div>
      <Footer />
    </>
  );
};

export default ReviewsProfile;
