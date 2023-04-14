const express = require('express');
const router = express.Router();

const {
  addReview,
  // getReviewsByReviewedId,
  getReviewsByReviewedId,
} = require('../controllers/reviewsControllers');

router.route('/addReview').post(addReview);
router.route('/reviewsByReviewedId/:reviewedId').get(getReviewsByReviewedId);

module.exports = router;
