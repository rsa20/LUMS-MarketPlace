import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import Review from '../../Components/Review/Review';
import SellerPHead from '../../Components/SellerPHead/SellerPHead';
import { useLocation } from 'react-router-dom';

// import pImg from './pimage.jpg';
// import p2Img from './p2image.jpg';

const ReviewsSeller = () => {
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    console.log(location.state.data, 'reviews array');
    if (location.state) {
      const reviewsArray = location.state.data;
      setReviews(reviewsArray);
    }
  }, [location.state]);
  console.log(reviews);
  const allReviews = reviews.map((review) => (
    <Review
      // key={toString(review._id)}
      {...review}
    />
  ));
  return (
    <>
      <Header />
      <SellerPHead page='R' />
      <div>
        <h1>Reviews Page</h1>
        {allReviews}
      </div>
      <Footer />
    </>
  );
};

export default ReviewsSeller;

// Hard code data
// const ReviewsSeller = () => {
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

// export default ReviewsSeller;
