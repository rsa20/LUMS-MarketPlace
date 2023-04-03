const express = require('express')
const router = express.Router()

const {addToWishlist, removeFromWishlist} = require('../controllers/wishlistController')

router.route('/addtowishlist/product/:postId/user/:email').get(addToWishlist)
router.route('/removefromwishlist/product/:postId/user/:email').get(removeFromWishlist)

module.exports = router