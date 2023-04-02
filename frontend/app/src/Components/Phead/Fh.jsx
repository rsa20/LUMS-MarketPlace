import './Fh.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

  return (
    <div className='profile-header'>
      <div className='container'>
        <div className='profile-header-btn'>
          <Link to='/viewp'>
            <a className='linkk'>Profile</a>
          </Link>
        </div>

        <div className='profile-header-btn'>
          <Link to='/edit'>
            <a className='linkk'>Edit & delete</a>
          </Link>
        </div>

        <div className='profile-header-btn'>
          <Link to='/Viewpost'>
            <a className='linkk'>My Ads</a>
          </Link>
        </div>

        <div
          className='profile-header-btn'
          onClick={toProfileReviews(userEmail)}
        >
          <Link to='/ReviewsP'>
            <a className='linkk'>Reviews</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
