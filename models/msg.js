const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  message: String
});

const Message = mongoose.model('Message', messageSchema);