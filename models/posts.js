const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const posts = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, required: true, default: false },
  sold_date: { type: Date, default: null },
  img_URL: { type: [String], required: true },
  date_created: { type: Date, required: true, default: Date.now },
  tags: { type: [String], required: true, default: [] },
  flags: { type: Number, default: 0 },
  user: { type: Schema.Types.ObjectId, required: true },
});

// posts.pre('save', function (next) {
//     if (this.isModified('status') && this.status === true) {
//         this.sold_date= new Date();
//     }
//     next();
// });

// posts.pre('updateOne', function (next) {
//     const update = this.getUpdate();
//     if (update.status && update.status === true) {
//         update.sold_date = new Date();
//     }
//     next();
// });

module.exports = mongoose.model('Post', posts);
