import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Components/header/Header1';
import Footer from '../../Components/Footer/Footer';
import SellerPHead from '../../Components/SellerPHead/SellerPHead';
import './AddReview.css';

const AddReviews = () => {
  const [reviewText, setReviewText] = useState('');
  const [reviewScore, setReviewScore] = useState(0);
  const [reviewedId, setReviewedId] = useState('');
  const [reviewerId, setReviewerId] = useState('');
  const [formValid, setFormValid] = useState(true);
  const reviewed = useSelector((state) => state.sellerObj.sellerObj).user;
  const reviewer = useSelector((state) => state.userObj.userObj);
  // const [resp, setResp] = useState('');
  console.log('reviewed', reviewed);
  console.log('reviewer', reviewer);

  useEffect(() => {
    setReviewedId(reviewed._id);
    setReviewerId(reviewer._id);
  }, [reviewed, reviewer]);

  const handleReviewTextChange = (event) => {
    const text = event.target.value;
    if (text.length <= 200) {
      setReviewText(text);
      setFormValid(text !== '' && reviewScore >= 0);
    }
  };

  const handleReviewScoreChange = (event) => {
    const score = parseInt(event.target.value);
    if (score >= 0 && score <= 5) {
      setReviewScore(score);
      setFormValid(reviewText !== '' && score >= 0);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    // make API post request here with review data
    // const aReview = { reviewedId, reviewerId, reviewText, reviewScore };
    console.log({ reviewerId, reviewedId, reviewText, reviewScore });

    try {
      const response = await fetch(`/api/reviews/addReview`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          params: {
            reviewedId,
            reviewerId,
            reviewText,
            reviewScore,
          },
        }),
      });

      if (!response.ok) {
        // throw new Error('Failed to save review.');
        console.log('Failed to save review.');
      }
      const data = await response.json();
      // setResp(<h1>{data.message}</h1>);
      console.log(data.message); // "Review saved successfully."
    } catch (error) {
      console.error(error);
    }
    setReviewText('');
    setReviewScore(0);
    setFormValid(false);
  };

  return (
    <>
      <Header />
      <SellerPHead page='A' />
      <div className='addRev-main'>
        {/* {resp} */}
        <h1 className='addRev-h1'>Add Review</h1>
        <form onSubmit={handleSubmit} className='addRev-form'>
          <label className='addRev-label' htmlFor='reviewScore'>
            Review Stars {'(0-5)'}
          </label>
          <input
            className='addRev-scoreinp'
            type='number'
            id='reviewScore'
            name='reviewScore'
            min='0'
            max='5'
            value={reviewScore}
            onChange={handleReviewScoreChange}
          />
          <label
            className='addRev-label'
            htmlFor='reviewText'
            style={{ marginTop: '1vw' }}
          >
            Review Text (1-200) characters
          </label>
          <textarea
            className='addRev-textarea'
            id='reviewText'
            name='reviewText'
            value={reviewText}
            onChange={handleReviewTextChange}
            style={{
              display: 'block',
              width: '90%',
              height: `${Math.max(reviewText.length / 50, 1)}rem`,
              resize: 'vertical',
              marginBottom: '0.5rem',
              padding: ' 0.5rem 1rem',
            }}
          />
          <div className='addRev-btns'>
            <button
              className='addRev-submitBtn'
              type='submit'
              disabled={!formValid}
              // onClick={handleSubmitClick}
            >
              Submit
            </button>
            <button
              className='addRev-submitBtn'
              type='button'
              onClick={() => {
                setReviewText('');
                setReviewScore(0);
                setFormValid(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddReviews;
