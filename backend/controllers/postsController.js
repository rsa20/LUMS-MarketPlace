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
    
    let tags = req.body.tags
    tags = tags.split(' ')

    if (tags!==req.body.title){
        post.tags = tags
    }

    if (req.body.img_URL!=post.img_URL){
        post.img_URL = req.body.img_URL
    }
    if(req.body.status==true){
        post.sold_date = Date.now();
        post.status = true; 
    }

    const updatedPost = await Post.findByIdAndUpdate({ _id: post.ObjectId }, post, { new: true });

    res.status(200).json({
        _id: updatedPost._id,
        title: updatedPost.title,
        description: updatedPost.description,
        price: updatedPost.price,
        status: updatedPost.status
    });

};

module.exports = {editPost}