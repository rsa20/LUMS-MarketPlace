const express = require('express');
const postRouter = express.Router();
const {
  editPost,
  createPost,
  getAllPosts,
  getPostbyID,
  getUserByPost,
  getPostsbyUser
} = require('../controllers/postsController');

postRouter.route('/editpost/:p_id').put(editPost);
postRouter.route('/createPost').post(createPost);
postRouter.route('/getAllProducts').get(getAllPosts);
postRouter.route('/product:id/:u_id').get(getPostbyID);
postRouter.route('/userByPost/:seller_id').get(getUserByPost);
postRouter.route('/getSellerPosts:u_id').get(getPostsbyUser)

module.exports = postRouter;
   