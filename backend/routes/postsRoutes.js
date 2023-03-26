const express = require('express')
const postRouter = express.Router()
const { editPost} = require('../controllers/postsController')


postRouter.route('/editpost').put(editPost)


module.exports = postRouter