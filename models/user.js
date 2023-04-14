const mongoose = require('mongoose');
require('mongoose-type-email');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const user = new Schema({
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'invalid email'],
    unique: true,
  },
  email_verification: { type: Boolean, required: true, default: false },
  token: { type: String, unique: true },
  password: { type: String, required: true },
  user_name: { type: String, required: false, unique: true },
  posts: { type: [Schema.Types.ObjectId], required: false, default: [] },
  name: { type: String, required: true },
  profile_picture: { type: String, default: null},
  flag: { type: Boolean, default: false },
  date_created: { type: Date, required: true, default: Date.now },
  profile_link: {type: String ,required:false, default:""}
});

user.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

user.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = mongoose.model('User', user);
