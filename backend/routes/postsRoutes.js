const express = require('express')
const postRouter = express.Router()
const { editPost, createPost, getAllPosts} = require('../controllers/postsController')


postRouter.route('/editpost').put(editPost)
postRouter.route('/createPost').post(createPost)
postRouter.route('/getAllProducts').get(getAllPosts)


module.exports = postRouter