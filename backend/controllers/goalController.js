// const Goal = require('../models/goalModel')
const User = require('../models/user');
const Post = require('../models/posts');
const Wishlist = require('../models/wishlist');
const Reviews = require('../models/reviews');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('../config/nodemailer');

// get all goals
// added by mmoez // it will get eail id and will share all the detalis of the user
const getUserByEmail = async (req, res) => {
  console.log('User email', req.params.email);
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).send({ message: 'DB Error' });
  }
};

const getUserbyId = async (req, res) => {
  const id = req.params.id;
  console.log('User id', id);
  try {
    // const user = await User.findById(id);
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    // console.log('user after updation', user);
    return res.json(user);
  } catch (error) {
    return res.status(500).send({ message: 'DB Error' });
  }
};

// const getInfoRP = async (req, res) => {
//   console.log(req.params.u_id);
// };
const getInfoRP = async (req, res) => {
  const { u_id } = req.params;
  console.log(u_id);

  try {
    const user = await User.findById(u_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const postsCount = user.posts.length;

    const reviews = await Reviews.find({ reviewed: u_id });

    return res.json({ posts: postsCount, reviews: reviews.length });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
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
  const user = await User.findOne({ _id: req.body.id });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  console.log("req.body: ", req.body)
  console.log("received img: ", req.body.p_img)
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.profile_link = req.body.profile_link|| user.profile_link;
  user.profile_picture =  req.body.p_img || user.profile_picture;
  if (req.body.password) {
    const hash = await bcrypt.hash(req.body.password, 10);
    user.password = hash;
  }
  // user.password = req.body.password || user.password;
  const updatedUser = await User.findOneAndUpdate({ _id: user._id }, user, {
    new: true,
  });
  if (!updatedUser) {
    return res.status(500).json({
      message: 'Entered email is already linked with another account',
    });
  }
  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    profile_picture: updatedUser.profile_picture,
  });
};
// const updateUserProfile = async (req, res) => {
//   const user = await User.findOne({ email: req.body.id });
//   const userbyEmail = await User.findOne({ email: req.body.email });

//   // if (userbyEmail && userbyEmail.email !== user.email) {
//   //   return res.status(500).json({
//   //     message: 'Entered email is already linked with another account',
//   //   });
//   // } else
//   if (!userbyEmail) {
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     if (req.body.password) {
//       const hash = await bcrypt.hash(req.body.password, 10);
//       user.password = hash;
//     }
//     const updatedUser = await User.findOneAndUpdate({ _id: user._id }, user, {
//       new: true,
//     });

//     res.status(200).json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//     });
//   } else {
//     if (userbyEmail.email != user.email) {
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
//       if (req.body.password) {
//         const hash = await bcrypt.hash(req.body.password, 10);
//         user.password = hash;
//       }
//       const updatedUser = await User.findOneAndUpdate({ _id: user._id }, user, {
//         new: true,
//       });

//       res.status(200).json({
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//       });
//     } else {
//       return res.status(500).json({
//         message: 'Entered email is already linked with another account',
//       });
//     }
//   }
// };

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
    const { name, email, password, profile_link } = req.body;
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
        user_name: name,
        token: token,
        flag: 0,
        profile_picture: null,
        profile_link: profile_link,
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

const deleteUser = async (req, res) => {
  console.log('mujhe delet kro please :)', req.params.u_id);
  const userId = req.params.u_id;

  try {
    //Delete that user
    await User.deleteOne({ _id: userId });

    //Delete all that user's posts
    await Post.deleteMany({ user: userId });

    //Delete that user's wishlist
    await Wishlist.deleteOne({ user: userId });

    //Delete all reviews of the user
    const reviewsToDelete = await Reviews.find({
      $or: [{ reviewer: userId }, { reviewed: userId }],
    });

    //If no reviews to be deleted, this step will be skipped
    if (reviewsToDelete.length > 0) {
      await Reviews.deleteMany({
        $or: [{ reviewer: userId }, { reviewed: userId }],
      });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: 'Error deleting User' });
  }
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
  getUserByEmail,
  deleteUser,
  getInfoRP,
};
