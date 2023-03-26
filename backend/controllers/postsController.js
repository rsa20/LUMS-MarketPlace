const Post = require('../models/posts')


const createPost = (async (req, res)=>{
    let newPost;
    const {email, title, desc, tags, price} = req.body


        newPost = new Post({ 
            title: title, 
            description: desc, 
            tags: tags, 
            price: price, 
            sold_date: null,
        })
    try{
        await Post.insertMany(newPost)
    }catch (error) {
        return res.status(500).send(error.message);
    }

    return res.status(200).json(newPost)
})


const createPost = (async (req, res)=>{
    let newPost;
    const {email, title, desc, tags, price} = req.body


        newPost = new Post({ 
            title: title, 
            description: desc, 
            tags: tags, 
            price: price, 
            sold_date: null,
        })
    try{
        await Post.insertMany(newPost)
    }catch (error) {
        return res.status(500).send(error.message);
    }

    return res.status(200).json(newPost)
})



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
