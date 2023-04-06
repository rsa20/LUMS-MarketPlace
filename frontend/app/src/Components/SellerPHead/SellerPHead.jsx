import './SellerPHead.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SellerPHeader = ({ page }) => {
  console.log(page);
  const sellerObj = useSelector((state) => state.sellerObj.sellerObj).user;
  console.log('seller obj : ', sellerObj);
  //  here i found the seller object .. its value is updated every time a person clicks the name of the seller on his product view post
  const [headerSt, setHeaderSt] = useState('');
  useEffect(() => {
    setHeaderSt(page);
  }, [page]);
  // console.log('seller profile header', id);
  const navigateTo = useNavigate();
  // const [sellerId, setSellerId] = useState('');
  // useEffect(() => {
  //   if (id) {
  //     setSellerId(id);
  //   }
  // }, [id]);
  // console.log('seller profile header', sellerId);

  // const toSellerProfile = async (seller_Id) => {
  //   // console.log('Seller id ', sellerId);
  //   setHeaderSt('P');
  //   axios
  //     .get(`/api/goals/viewProfile/user${seller_Id}`)
  //     .then((res) => {
  //       // console.log('in Pheader line22', res.data);
  //       navigateTo(`/SellerViewP`, { state: { user: res.data } });
  //     })
  //     .catch((error) => console.error('Profile showing error : ', error));
  // };
  const toSellerProfile = () => {
    // setHeaderSt('P');
    navigateTo(`/SellerViewP`);
  };

  // Listing Ads

  // AddReviews
  const toAddReviews = (RevieweeId) => {
    // setHeaderSt('A');
    // navigateTo(`/AddReviews`, { state: { R_id: RevieweeId } });
    navigateTo(`/AddReviews`);
  };

  // Reviews list
  const toSellerReviews = async (reviewedId) => {
    console.log(reviewedId, 'user :fetch reviews list');

    try {
      const response = await fetch(
        `/api/reviews/reviewsByReviewedId/${reviewedId}`
      );
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      }
      const reviews = await response.json();
      console.log(reviews);
      navigateTo('/ReviewsSeller', { state: { data: reviews } });
    } catch (error) {
      console.error(`Error fetching reviews: ${error.message}`);
      // return null;
    }
  };

  return (
    <div className='s-profile-header'>
      <div className='s-container'>
        <div
          className={`s-profile-header-btn${headerSt === 'P' ? '-active' : ''}`}
          onClick={() => toSellerProfile()}
        >
          <Link className='s-linkk'>
            Profile
            {/* <a className='s-linkk'>Profile</a> */}
          </Link>
        </div>

        <div
          className={`s-profile-header-btn${headerSt === 'L' ? '-active' : ''}`}
        >
          <Link to='/hello' className='s-linkk'>
            Listing Ads
            {/* <a className='s-linkk'>Edit & delete</a> */}
          </Link>
        </div>

        <div
          className={`s-profile-header-btn${headerSt === 'A' ? '-active' : ''}`}
          onClick={() => toAddReviews(sellerObj._id)}
        >
          <Link className='s-linkk'>Add Reviews</Link>
        </div>

        <div
          className={`s-profile-header-btn${headerSt === 'R' ? '-active' : ''}`}
          onClick={() => toSellerReviews(sellerObj._id)}
        >
          <Link className='s-linkk'>Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default SellerPHeader;
