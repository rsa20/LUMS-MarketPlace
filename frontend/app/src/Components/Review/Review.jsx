import { memo } from 'react';
import './Review.css';
import plimg from './placeholderimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const Review = memo(
  ({ reviewerName, reviewText, reviewScore, reviewerImg }) => {
    const defaultData = {
      reviewerName: 'username',
      reviewText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, aliquid nesciunt a ',
      reviewScore: 0,
      reviewerImg: plimg,
    };

    const {
      reviewerName: name = defaultData.reviewerName,
      reviewText: text = defaultData.reviewText,
      reviewScore: score = defaultData.reviewScore,
      // reviewerImg: img = defaultData.reviewerImg,
    } = {
      reviewerName,
      reviewText,
      reviewScore,
      // reviewerImg,
    };

    let img = defaultData.reviewerImg;
    if (reviewerImg !== null) {
      img = reviewerImg;
    }

    const stars = new Array(score).fill(null).map(() => (
      <FontAwesomeIcon
        className='icon-star'
        icon={faStarSolid}
        // style={{ color: '#ffc800', margin: '0 0.07rem', fontSize: '0.8rem' }}
      />
    ));
    const emptyStars = new Array(5 - score).fill(null).map(() => (
      <FontAwesomeIcon
        className='icon-star'
        icon={faStar}
        // style={{ color: '#ffc800', margin: '0 0.07rem', fontSize: '0.8rem' }}
      />
    ));

    return (
      <div className='single-review'>
        <div className='reviewer-imCon'>
          <img
            className='reviewer-img'
            // style={{ width: '100%', objectFit: 'cover', objectFit: 'cover' }}
            src={img}
            alt=''
          />
        </div>
        <h4 className='reviewer-name'>{name}</h4>
        <div className='review-stars'>
          {stars}
          {emptyStars}
        </div>
        <h4 className='review-text'>{text}</h4>
      </div>
    );
  }
);

export default Review;
