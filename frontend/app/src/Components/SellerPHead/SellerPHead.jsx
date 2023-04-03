import './SellerPHead.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SellerPHeader = () => {
  // const userEmail = useSelector((state) => state.userEmail.userEmail);
  // const navigateTo = useNavigate();

  // const toProfileReviews = async (userEmailFR) => {
  //   console.log(userEmailFR, 'user :fetch reviews list');
  //   const response = await fetch(`/api/reviews/${userEmailFR}`);
  //   const data = await response.json();
  //   // const { reviewsArray } = data;
  //   // console.log(reviewsArray);
  //   navigateTo('/ReviewsP', { state: data });
  // };

  return (
    <div className='s-profile-header'>
      <div className='s-container'>
        <div className='s-profile-header-btn'>
          <Link to='/hello' className='s-linkk'>
            Profile
            {/* <a className='s-linkk'>Profile</a> */}
          </Link>
        </div>

        <div className='s-profile-header-btn'>
          <Link to='/hello' className='s-linkk'>
            Listing Ads
            {/* <a className='s-linkk'>Edit & delete</a> */}
          </Link>
        </div>

        <div className='s-profile-header-btn'>
          <Link to='/hello' className='s-linkk'>
            Add Reviews
            {/* <a className='s-linkk'>My Ads</a> */}
          </Link>
        </div>

        <div
          className='s-profile-header-btn'
          // onClick={() => toProfileReviews(userEmail)}
        >
          <Link to='/hello' className='s-linkk'>
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerPHeader;
