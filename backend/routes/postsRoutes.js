const express = require('express');
const postRouter = express.Router();
const {
  editPost,
  createPost,
  getAllPosts,
  getPostbyID,
} = require('../controllers/postsController');

postRouter.route('/editpost').put(editPost);
postRouter.route('/createPost').post(createPost);
postRouter.route('/getAllProducts').get(getAllPosts);
postRouter.route('/product:id').get(getPostbyID);

module.exports = postRouter;
