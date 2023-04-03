import './Fh.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ProfileHeader = () => {
  const userEmail = useSelector((state) => state.userEmail.userEmail);
  const navigateTo = useNavigate();

  const toProfileReviews = async (userEmailFR) => {
    console.log(userEmailFR, 'user :fetch reviews list');
    const response = await fetch(`/api/reviews/${userEmailFR}`);
    const data = await response.json();
    // const { reviewsArray } = data;
    // console.log(reviewsArray);
    navigateTo('/ReviewsP', { state: data });
  };

  const toViewProfile = async (userEmailFR) => {
    const id = userEmailFR;
    axios
      .get(`api/goals/viewProfile/${id}`)
      .then((res) => {
        navigateTo(`/viewP`, { state: { user: res.data } });
      })
      .catch((error) => console.error('Profile showing error : ', error));
  };

  return (
    <div className='profile-header'>
      <div className='container'>
        <div
          className='profile-header-btn'
          onClick={() => toViewProfile(userEmail)}
        >
          <Link to='/viewp' className='linkk'>
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
          onClick={() => toProfileReviews(userEmail)}
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
