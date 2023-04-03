import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddReview = ({ location }) => {
  // const navigate = useNavigate();
  // const userEmail = useSelector((state) => state.userEmail.userEmail);
  // const [reviewText, setReviewText] = useState('');
  // const [reviewScore, setReviewScore] = useState('');
  // const [reviewerName, setReviewerName] = useState('');
  // const [reviewerProfileImage, setReviewerProfileImage] = useState('');
  // const [revieweeEmail, setRevieweeEmail] = useState(location.state.email);

  // useEffect(() => {
  //   axios
  //     .get(`http://backend-url.com/api/user/${userEmail}`)
  //     .then((response) => {
  //       setReviewerName(response.data.name);
  //       setReviewerProfileImage(response.data.profileImage);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const handleReviewSubmit = (event) => {
  //   event.preventDefault();
  //   const review = {
  //     reviewerId: userEmail,
  //     revieweeId: revieweeEmail,
  //     reviewText: reviewText,
  //     reviewScore: reviewScore,
  //   };
  //   axios
  //     .post(`http://backend-url.com/api/reviews`, review)
  //     .then((response) => {
  //       console.log(response);
  //       navigate(`/reviews/${revieweeEmail}`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <h1>Add Review</h1>
      {/* <form onSubmit={handleReviewSubmit}>
        <label>
          Review Text:
          <textarea
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
          />
        </label>
        <br />
        <label>
          Review Score:
          <input
            type='number'
            value={reviewScore}
            onChange={(event) => setReviewScore(event.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Done</button>
      </form> */}
    </div>
  );
};

export default AddReview;
