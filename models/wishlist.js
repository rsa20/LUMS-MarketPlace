const mongoose = require('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const wishlist = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  posts: { type: [Schema.Types.ObjectId], required: true, default: [] },
  date_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wishlist', wishlist);
