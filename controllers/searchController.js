const Post = require('../models/posts');

const simpleSearch = async (req, res) => {
  const searchString = req.body.params.search;

  try {
    const posts = await Post.find({ $text: { $search: searchString } });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'No  matching results' });
  }
};

const filterSearch = async (req, res) => {

  console.log(req.body.params)
  const searchString = req.body.params.search;
  const filters = req.body.params.selectedFilters;
  const priceRange = req.body.params.priceRange;
  

  let query = {};

  if (searchString) {
    query.$text = { $search: searchString };
  }

  // if (filters && filters.length > 0) {   need to replace them with categories
  //     query.tags = { $in: filters };
  // }

  if (priceRange && priceRange.min && priceRange.max) {
    query.price = { $gte: priceRange.min, $lte: priceRange.max };
  }

  try {
    const posts = await Post.find(query);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};

module.exports = { simpleSearch, filterSearch };
