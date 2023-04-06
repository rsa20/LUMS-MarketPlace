import './Fh.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ProfileHeader = () => {
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  const loggedInUser = useSelector((state) => state.userObj.userObj);

  const navigateTo = useNavigate();

  const toProfileReviews = async (reviewedId) => {
    // console.log(userEmailFR, 'user :fetch reviews list');
    // const response = await fetch(`/api/reviews/${userEmailFR}`);
    // const data = await response.json();
    // // const { reviewsArray } = data;
    // // console.log(reviewsArray);
    // navigateTo('/ReviewsP', { state: data });
    console.log(reviewedId, 'user :fetch reviews list');
    navigateTo('/ReviewsP');
    // try {
    //   const response = await fetch(
    //     `/api/reviews/reviewsByReviewedId/${reviewedId}`
    //   );
    //   if (!response.ok) {
    //     console.error(`HTTP error! status: ${response.status}`);
    //   }
    //   const { reviews } = await response.json();
    //   console.log('reviews', reviews);

    //   navigateTo('/ReviewsP', { state: { data: reviews } });
    // } catch (error) {
    //   console.error(`Error fetching reviews: ${error.message}`);
    //   return null;
    // }
  };

  const toViewProfile = async (userEmailFR) => {
    navigateTo(`/viewP`);
    // const id = userEmailFR;
    // axios
    //   .get(`/api/goals/viewProfile${userEmailFR}`)
    //   .then((res) => {
    //     console.log('here_Phead_24', res.data);
    //     navigateTo(`/viewP`, { state: { user: res.data } });
    //   })
    //   .catch((error) => console.error('Profile showing error : ', error));
  };

  return (
    <div className='profile-header'>
      <div className='container'>
        <div
          className='profile-header-btn'
          onClick={() => toViewProfile(userEmail)}
        >
          {/* <Link to='/viewp' className='linkk'> */}
          <Link className='linkk'>
            Profile
            {/* <a className='linkk'>Profile</a> */}
          </Link>
        </div>

        <div className='profile-header-btn'>
          <Link to='/edit' className='linkk'>
            Edit & delete
            {/* <a className='linkk'>Edit & delete</a> */}
          </Link>
        </div>

        <div className='profile-header-btn'>
          <Link to='/Viewpost' className='linkk'>
            My Ads
            {/* <a className='linkk'>My Ads</a> */}
          </Link>
        </div>

        <div
          className='profile-header-btn'
          onClick={() => toProfileReviews(loggedInUser._id)}
        >
          <Link to='/ReviewsP' className='linkk'>
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
