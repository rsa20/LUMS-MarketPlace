const Post = require('../models/posts');
const Wishlist = require('../models/wishlist');
const User = require('../models/user');

const addToWishlist = async (req, res) => {
  // const postId = req.body.params.postId;
  // const userId = req.body.params.userId;
  const action = req.params.action;
  const postId = req.params.postId;
  const userEmail = req.params.email;
  const user = await User.findOne({
    email: userEmail,
  });
  const userId = user._id;

  // const userId = req.params.userId;
  console.log('Adding to wishlist: ', postId, userId);
  try {
    const post = await Post.findById(postId);
    const wishlist = await Wishlist.findOne({ user: userId });

    if (wishlist) {
      wishlist.posts.push(postId);
      await wishlist.save();
    } else {
      const newWishlist = new Wishlist({
        user: userId,
        posts: [postId],
      });
      await newWishlist.save();
    }

    res.status(200).send('Added to wishlist successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

const removeFromWishlist = async (req, res) => {
  const postId = req.params.postId;
  const userEmail = req.params.email;
  const user = await User.findOne({
    email: userEmail,
  });
  const userId = user._id;

  // const {user_id, post_id} = req.body

  const goal = Wishlist.updateOne(
    { user: userId },
    { $pull: { posts: postId } },
    function (err) {
      if (err) {
        return res.status(500).send({ message: 'Error!' });
      } else {
        return res.status(200).json({ message: 'Post removed from wishlist!' });
      }
    }
  );
};

const getUserWishlist = async (req, res) => {
  console.log('whishlist called');
  const loggedInUserId = req.params.u_id;
  const wishlist = await Wishlist.findOne({
    user: loggedInUserId,
  });
  if (!wishlist) {
    return res.status(200).send([]);
  }
  // return res.send(wishlist)
  post_ids = wishlist.posts;
  console.log(post_ids);
  // return res.send(post_ids)
  wishlistPosts = await Post.find({
    _id: { $in: post_ids },
  });
  res.status(200).send(wishlistPosts);
};

module.exports = { addToWishlist, removeFromWishlist, getUserWishlist };
