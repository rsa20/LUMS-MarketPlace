import './SellerPHead.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
  //       navigate(`/SellerViewP`, { state: { user: res.data } });
  //     })
  //     .catch((error) => console.error('Profile showing error : ', error));
  // };
  const toSellerProfile = () => {
    // setHeaderSt('P');
    navigate(`/SellerViewP`);
  };

  // Listing Ads

  const toSellerposts = async (seller) => {

    console.log("fetch seller posts", seller)
    
    let mywish;
    const sellerID = seller._id
    await fetch(`/api/posts/getSellerPosts${sellerID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'test');
        mywish = data;
        // setwish(data);
      })
      .catch((error) => console.log(error));
    // console.log(wish, 'hmmm');
    navigate('/wish', { state: { mywish } });

  }

  // AddReviews
  const toAddReviews = (RevieweeId) => {
    // setHeaderSt('A');
    // navigate(`/AddReviews`, { state: { R_id: RevieweeId } });
    navigate(`/AddReviews`);
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
      navigate('/ReviewsSeller', { state: { data: reviews } });
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
          onClick={() => toSellerposts(sellerObj)}
        >
          <Link className='s-linkk'>
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
