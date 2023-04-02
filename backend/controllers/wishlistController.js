const Post = require("../models/posts");
const Wishlist = require("../models/wishlist");

const addToWishlist = async (req, res) => {
    const postId = req.body.params.postId;
    const userId = req.body.params.userId;

    try {
        const post = await Post.findById(postId);
        const wishlist = await Wishlist.findOne({ user: userId });

        if (wishlist) {
            wishlist.posts.push(postId);
            await wishlist.save();
        } else {
            const newWishlist = new Wishlist({
                user: userId,
                posts: [postId]
            });
            await newWishlist.save();
        }

        res.status(200).send("Added to wishlist successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error");
    }
};


const removeFromWishlist = (async (req, res)=>{
    const postId = req.params.postId;
    const userEmail = req.params.email
    const user = await User.findOne({
        email : userEmail
    })
    const userId = user._id;
    
    // const {user_id, post_id} = req.body

    
    const goal = Wishlist.updateOne({ user: userId },
        { $pull: { posts: postId } },
        function (err) {
            if (err) {
            return res.status(500).send({message:"Error!"});
        } else {
            return res.status(200).json({message:"Post removed from wishlist!"})
        }
        });
})
module.exports = {addToWishlist, removeFromWishlist}
