const mongoose = require('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const reviews = new Schema({
  reviewer: { type: Schema.Types.ObjectId, required: true },
  reviewed: { type: Schema.Types.ObjectId, required: true },
  reviewText: { type: String, required: true, default: '' },
  score: { type: Number, required: true, min: 0, max: 5 },
});

module.exports = mongoose.model('Reviews', reviews);
