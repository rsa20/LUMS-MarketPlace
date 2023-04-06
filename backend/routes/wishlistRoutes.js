const express = require('express')
const router = express.Router()

const {addToWishlist, removeFromWishlist, getUserWishlist} = require('../controllers/wishlistController')

router.route('/addtowishlist/product/:postId/user/:email').get(addToWishlist)
router.route('/removefromwishlist/product/:postId/user/:email').get(removeFromWishlist)
router.route('/getWishlist/:u_id').get(getUserWishlist)

module.exports = router