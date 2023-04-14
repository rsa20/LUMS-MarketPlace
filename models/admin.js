const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const admin = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('Admin', admin);
