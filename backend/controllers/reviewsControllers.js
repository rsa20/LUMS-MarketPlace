const Reviews = require('../models/reviews');
const User = require('../models/user');

const addReview = async (req, res) => {
  console.log(req.body.params);
  const { reviewedId, reviewerId, reviewText, reviewScore } = req.body.params;

  try {
    const newReview = new Reviews({
      reviewed: reviewedId,
      reviewer: reviewerId,
      reviewText: reviewText,
      score: reviewScore,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review saved successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save review.' });
  }
};

// const getReviewsByReviewedId = async (req, res) => {
//   try {
//     const { reviewedId } = req.params;
//     const reviews = await Reviews.find({ reviewed: reviewedId });
//     res.status(200).json(reviews);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
const getReviewsByReviewedId = async (req, res) => {
  try {
    const { reviewedId } = req.params;
    const reviews = await Reviews.find({ reviewed: reviewedId });
    const formattedReviews = await Promise.all(
      reviews.map(async (review) => {
        const reviewer = await User.findById(review.reviewer);
        // console.log(reviewer);
        return {
          _id: review._id,
          reviewText: review.reviewText,
          reviewScore: review.score,
          reviewerName: reviewer.user_name,
          reviewerImg: reviewer.profile_picture,
        };
      })
    );
    // console.log('formattedReviews:', formattedReviews);

    res.status(200).json(formattedReviews.reverse());
  } catch (err) {
    console.log('here', err);
    res.status(500).json({ message: err.message });
  }
};

// module.exports = { addReview, getReviewsByReviewedId };
module.exports = { addReview, getReviewsByReviewedId };
