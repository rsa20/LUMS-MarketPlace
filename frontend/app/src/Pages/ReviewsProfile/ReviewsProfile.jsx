import React from 'react';
import { useState, useEffect } from 'react';

import Header from '../../Components/header/Header1';
import Phead from '../../Components/Phead/Fh';
import Footer from '../../Components/Footer/Footer';
import Review from '../../Components/Review/Review';
// import pImg from './pimage.jpg';
// import p2Img from './p2image.jpg';
import { useSelector } from 'react-redux';

const ReviewsProfile = () => {
  const loggedInUser = useSelector((state) => state.userObj.userObj);
  const [reviews, setReviews] = useState([]);

  const revFetcher = async () => {
    try {
      const response = await fetch(
        `/api/reviews/reviewsByReviewedId/${loggedInUser._id}`
      );
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      }
      const arr = await response.json();
      setReviews(arr);
      console.log('arr', arr);
    } catch (error) {
      console.error(`Error fetching reviews: ${error.message}`);
    }
  };
  useEffect(() => {
    revFetcher();
  }, []);

  // const location = useLocation();
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   console.log(location.state.data, 'reviews array');
  //   if (location.state) {
  //     const reviewsArray = location.state.data;
  //     setReviews(reviewsArray);
  //   }
  // }, [location.state]);
  // console.log(reviews);
  const allReviews = reviews.map((review) => (
    <Review key={review._id} {...review} />
  ));
  return (
    <>
      <Header />
      <Phead />
      <div>
        <h1>Reviews Page</h1>
        {allReviews}
      </div>
      <Footer />
    </>
  );
};

export default ReviewsProfile;

// const ReviewsProfile = ({ userEmail }) => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(`/api/reviews/${userId}`);
//         const data = await response.json();
//         setReviews(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchReviews();
//   }, [userId]);

//   const allReviews = reviews.map((review) => <Review {...review} />);

// Hard code data
// const ReviewsProfile = () => {
//   const reviews = [
//     {
//       reviewerName: 'Abdul',
//       reviewScore: 3,
//       reviewText: 'hello i under the water. Please Help me!',
//     },
//     {
//       reviewerName: 'Talha1',
//       reviewScore: 1,
//       reviewText: 'Udhr hi reh no Help',
//       reviewerImg: p2Img,
//     },
//     {
//       reviewerName: 'Talha2',
//       reviewScore: 4,
//       reviewText: 'Udhr hi reh no Help',
//       reviewerImg: pImg,
//     },
//     {
//       reviewerName: 'Abdullah',
//       reviewScore: 3,
//       reviewText: 'mujhe anday wala burger chahiye',
//       reviewerImg: pImg,
//     },
//   ];
//   const allReviews = reviews.map((review) => <Review {...review} />);
//   return (
//     <>
//       <Header />
//       <Phead />
//       <div>
//         <h1>Reviews Page</h1>
//         {allReviews}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ReviewsProfile;
