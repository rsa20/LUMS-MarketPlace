const express = require('express');
const postRouter = express.Router();
const {
  editPost,
  deletePost,
  createPost,
  getAllPosts,
  getPostbyID,
  getUserByPost,
  getPostsbyUser,
  allProductsWithUserName,
} = require('../controllers/postsController');

postRouter.route('/editpost/:p_id').put(editPost);
postRouter.route('/deletePost/:p_id').get(deletePost);
postRouter.route('/createPost').post(createPost);
postRouter.route('/getAllProducts').get(getAllPosts);
postRouter.route('/allProductsWithUserName').get(allProductsWithUserName);
postRouter.route('/product:id/:u_id').get(getPostbyID);
postRouter.route('/userByPost/:seller_id').get(getUserByPost);
postRouter.route('/getSellerPosts:u_id').get(getPostsbyUser);

module.exports = postRouter;
