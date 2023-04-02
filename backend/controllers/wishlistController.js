const Post = require("../models/posts");

const addToWishlist = async (req, res) => {
    const postId = req.body.postId;
    const userId = req.body.userId;

    try {
        const post = await Post.findById(postId);
        const wishlist = await Wishlist.findOne({ userId: userId });

        if (wishlist){
            wishlist.items.push(post);
            await wishlist.save();
        } else {
            const newWishlist = new Wishlist({
                userId: userId,
                items: [post]
            });
            await newWishlist.save();
        }
        res.status(200).send("Added to Wishlist Successfully");
    }catch(err){
        res.status(500).send("Error");
    }
};


module.exports = {addToWishlist}
