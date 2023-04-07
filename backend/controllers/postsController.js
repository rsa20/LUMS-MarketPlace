const Post = require('../models/posts');
const User = require('../models/user');

async function getUserByPost(req, res) {
  try {
    // const post = await Post.findOne({ post_id: req.params.post_id });
    // if (!post) {
    //   return res.status(404).json({ error: 'Post not found' });
    // }
    // const user = await User.findOne({ posts: post._id });
    const user = await User.findById(req.params.seller_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

const getPostsbyUser = async(req, res)=>{
  console.log("here")
    
    // console.log(req)
  const user_id = req.params.u_id
  // console.log("user id:",user_id)
  const userfound = await User.findOne({
    _id : user_id
  })
  // console.log("user found:", userfound)
  const post_ids = userfound.posts
  console.log("post id: ", post_ids)
  userPosts = await Post.find({
    _id: {$in : post_ids}
  })
  if(!userPosts){
    return res.status(404).send({message:"No posts"})
  }
  console.log("Posts sent")
  return res.status(200).send(userPosts)
  
  

}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (!posts) {
      return res.status(404).send({ message: 'No posts found' });
    }
    // console.log(posts)
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send({ message: 'DB Error' });
  }
};

const getPostbyID = async (req, res) => {
  id = req.params.id;
  loggedInId = req.params.u_id;

  console.log(id, loggedInId);
  try {
    let post = await Post.findById(id);
    if (!post) {
      return res.status(404).send({ message: 'Post not found' });
    }
    let myPost = loggedInId == post.user;
    // console.log(loggedInId == post.user)
    // if(loggedInId == post.user){
    // myPost = true
    // console.log('own post')
    // }

    return res.status(200).json({ post, myPost });
  } catch (error) {
    return res.status(500).send({ message: 'DB Error' });
  }
};

const createPost = async (req, res) => {
  console.log(req.body.params);
  if (!req.body) {
    return res.status(404).json({ message: 'Missing post fields' });
  }
  const { title, description, price, tags, image } = req.body.params.Post;
  const useremail = req.body.params.userEmail;
  console.log(useremail);
  const user = await User.findOne({
    email: useremail,
  });

  // const findSame = await Post.findOne({
  //   $or: [{ title: title }, { description: description }],
  // });
  // if (findSame) {
  //   return res.status(500).json({ message: "Post already exists!" });
  // }

  tagsList = tags.split(' ');
  newPost = new Post({
    title: title,
    description: description,
    price: price,
    tags: tagsList,
    img_url: [''],
    flags: 0,
    user: user._id,
  });
  await newPost.save((err) => {
    if (err) {
      console.log('unsuccesful');
      res.send(err);
      return;
    }
    console.log(title, ' added');
    res.status(200).send(newPost);
  });

  let postArr = user.posts;
  postArr.push(newPost._id);

  await User.findOneAndUpdate(
    {
      email: useremail,
    },
    {
      posts: postArr,
    }
  );
  console.log(user._id);
};

const editPost = async (req, res) => {
  console.log('here');
  const postID = req.params.p_id;
  const formData = req.body.params.Post;
  console.log(postID);
  const post = await Post.findById(postID);
  if (post.title != formData.title) {
    post.title = formData.title;
  }
  if (post.description != formData.description) {
    post.description = formData.description;
  }
  if (post.price != formData.price) {
    post.price = formData.price;
  }
  if (post.status != formData.status) {
    post.status = formData.status;
  }

  console.log(req.body.params.Post);
  let tags = formData.tags;
  tags = tags.split(' ');

  if (post.tags !== tags) {
    post.tags = tags;
  }

  if (formData.img_URL != post.img_URL) {
    post.img_URL = formData.img_URL;
  }
  if (formData.status == true) {
    post.sold_date = Date.now();
    post.status = true;
  }

  const updatedPost = await Post.findByIdAndUpdate({ _id: post._id }, post, {
    new: true,
  });

  res.status(200).json({
    _id: updatedPost._id,
    title: updatedPost.title,
    description: updatedPost.description,
    price: updatedPost.price,
    status: updatedPost.status,
  });
};

const deletePost = async (req, res) => {
  const p_id = req.body.params.post._id;

  try {
    const post = await Post.findById(p_id);
    const u_id = post.user;
    console.log(u_id);
    const deletedPost = await Post.findByIdAndDelete(req.body.ObjectId);

    res.status(200).json({
      message: `Post deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  editPost,
  deletePost,
  createPost,
  getAllPosts,
  getPostbyID,
  getUserByPost,
  getPostsbyUser
};
