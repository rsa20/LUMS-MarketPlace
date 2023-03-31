import { memo } from 'react';
import './Review.css';
import plimg from './placeholderimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const Review = memo(
  ({
    reviwerName = 'username',
    reviewText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, aliquid nesciunt a ',
    reviewScore = 2,
    reviewerImg = plimg,
  }) => {
    reviewScore = reviewScore > 5 ? 5 : reviewScore;
    return (
      <div className='single-review'>
        <div className='reviewer-imCon'>
          <img
            className='reviewer-img'
            style={{ width: '100%', objectFit: 'cover' }}
            src={reviewerImg}
            alt=''
          />
        </div>
        <h4 className='reviewer-name'>{reviwerName}</h4>
        {/* <div className='review-score'>{reviewScore}</div> */}
        <div className='review-stars'>
          {new Array(reviewScore).fill(null).map(() => (
            <FontAwesomeIcon
              icon={faStarSolid}
              style={{
                color: '#ffc800',
                margin: '0 0.07rem',
                fontSize: '0.8rem',
              }}
            />
          ))}
          {new Array(5 - reviewScore).fill(null).map(() => (
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: '#ffc800',
                margin: '0 0.07rem',
                fontSize: '0.8rem',
              }}
            />
          ))}
        </div>
        <h4 className='review-text'>{reviewText}</h4>
      </div>
    );
  }
);

export default Review;
