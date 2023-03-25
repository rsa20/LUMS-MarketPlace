const Post = require('../models/posts')

const editPost = async (req, res) => {

    const post = await Post.findById(req.body.ObjectId);
    if (post.title != req.body.title){    
        post.title = req.body.title;
    }
    if (post.description != req.body.description){    
        post.description = req.body.description;
    }
    if (post.price != req.body.price){    
        post.price = req.body.price;
    }
    if (post.status != req.body.status){    
        post.status = req.body.status;
    }
    // post.tags = post.tags.append(req.body.status)||post.tags;

    const updatedpost = await Post.findByIdAndUpdate({ _id: post.ObjectId }, post, { new: true });

    res.status(200).json({
        _id: updatedPost._id,
        title: updatedPost.title,
        description: updatedPost.description,
        price: updatedPost.price,
        status: updatedPost.status
    });

    const deletePost = async (req, res) => {

    try{
    const deletedPost = await Post.findByIdAndDelete(req.body.ObjectId);
    res.status(200).json({
        message: `Post deleted successfully`
    });
    }catch(error){
        res.status(500).json({message: 'Server Error'});
    }
};

};

module.exports = {editPost, deletePost}
