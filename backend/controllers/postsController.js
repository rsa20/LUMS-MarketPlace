const Post = require("../models/posts");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (!posts) {
      return res.status(404).send({ message: "No posts found" });
    }
    console.log(posts)
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send({ message: "DB Error" });
  }
};

const createPost = async (req, res) => {
  if (!req.body) {
    return res.status(404).json({ message: "Missing post fields" });
  }
  const { title, description, price, tags } = req.body;

  const findSame = await Post.findOne({
    $or: [{ title: title }, { description: description }],
  });
  if (findSame) {
    return res.status(500).json({ message: "Post already exists!" });
  }

  tagsList = tags.split(" ");
  newPost = new Post({
    title: title,
    description: description,
    price: price,
    tags: tagsList,
    img_url: [""],
    flags: 0,
  });
  await newPost.save((err) => {
    if (err) {
      console.log("unsuccesful");
      res.send(err);
      return;
    }
    console.log(title, " added");
    res.status(200).send(newPost);
  });
};

const editPost = async (req, res) => {
  const post = await Post.findById(req.body.ObjectId);
  if (post.title != req.body.title) {
    post.title = req.body.title;
  }
  if (post.description != req.body.description) {
    post.description = req.body.description;
  }
  if (post.price != req.body.price) {
    post.price = req.body.price;
  }
  if (post.status != req.body.status) {
    post.status = req.body.status;
  }

  let tags = req.body.tags;
  tags = tags.split(" ");

  if (tags !== req.body.title) {
    post.tags = tags;
  }

  if (req.body.img_URL != post.img_URL) {
    post.img_URL = req.body.img_URL;
  }
  if (req.body.status == true) {
    post.sold_date = Date.now();
    post.status = true;
  }

  const updatedPost = await Post.findByIdAndUpdate(
    { _id: post.ObjectId },
    post,
    { new: true }
  );

  res.status(200).json({
    _id: updatedPost._id,
    title: updatedPost.title,
    description: updatedPost.description,
    price: updatedPost.price,
    status: updatedPost.status,
  });
};

const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.body.ObjectId);
    res.status(200).json({
      message: `Post deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { editPost, deletePost, createPost, getAllPosts };
