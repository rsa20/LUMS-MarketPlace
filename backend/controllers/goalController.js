// const Goal = require('../models/goalModel')
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('../config/nodemailer');

// get all goals
// added by mmoez // it will get eail id and will share all the detalis of the user
const getUserbyId = async (req, res) => {
  // console.log("what")
  const id = req.params.id;
  // console.log(id);
  try {
    const user = await User.findById(id );
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).send({ message: 'DB Error' });
  }
};
//
const getUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

const updateUserProfile = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
    const hash = await bcrypt.hash(req.body.password, 10);
    user.password = hash;
  }
  // user.password = req.body.password || user.password;

  const updatedUser = await User.findOneAndUpdate({ _id: user._id }, user, {
    new: true,
  });

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const getUserByEmail = await User.findOne({
    email: email,
  });
  // console.log(getUserByEmail)
  // console.log(req.body)

  if (getUserByEmail) {
    if (!getUserByEmail.email_verification) {
      return res.status(401).send({
        message:
          'Un-verified email. You must verify your email before proceeding further',
      });
    }
    const hash = getUserByEmail.password;
    // console.log(password)
    const validPass = await bcrypt.compare(password, hash);

    if (validPass) {
      res.send(getUserByEmail);
      console.log('Logged in: ', email);
    } else {
      res.send({ message: 'invalid pass!' });
      console.log('invalid pass!');
    }
  } else {
    res.status(404).send({ message: 'email does not exist' });
    console.log('email does not exist');
  }
  // res.status(200).json(getUserByEmail)
};

const verifyUser = (req, res, next) => {
  User.findOne({
    token: req.params.token,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Token not found' });
      }
      user.email_verification = true;
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
      res.json({ message: 'Email verified. You can now login' });
    })
    .catch((err) => console.log('verification error', err));
};

const registerUser = async (req, res) => {
  // console.log("call", req.body)
  try {
    const { name, email, password } = req.body;
    const token = jwt.sign({ email: email }, process.env.EMAIL_SECRET);

    const getUser = await User.findOne({
      email: email,
    });

    if (getUser) {
      res.send({ message: 'Email already exists!' });
    } else {
      newUser = new User({
        name: name,
        email: email,
        password: password,
        created_date: Date(),
        user_name: name,
        token: token,
        flags: 0,
      });
      // User.insertMany(newUser)
      newUser.save((err) => {
        if (err) {
          console.log('here');
          res.send(err);
          return;
        }
        res.send({
          message: 'Successfully Registered, Please verify your email.',
        });
        nodemailer.sendVerificationEmail(name, email, token);
      });
    }
  } catch (err) {
    res.json({ message: 'register error' });
  }

  // res.status(200)
};

const deleteAllUsers = async (req, res) => {
  User.deleteMany({ email: { $ne: '' } });
  res.status(200).json({ message: 'DELETED USERS' });
};

// const deleteUser = async()

module.exports = {
  updateUserProfile,
  deleteAllUsers,
  loginUser,
  registerUser,
  verifyUser,
  getUser,
  getUserbyId,
};
