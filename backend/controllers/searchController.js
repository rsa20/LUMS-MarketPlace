const Post = require("../models/posts");

const simpleSearch = (async (req, res) => {
    const searchString = req.body.params.search
    res.status(200).send("succesful")

})

const filterSearch = (async (req, res) => {
    const searchString = req.body.params.search
    const priceRange = req.body.params.priceRange
    const filters = req.body.params.selectedFilters

    console.log(searchString, priceRange, filters)
    res.status(200).send("succesful")
})

module.exports = {simpleSearch, filterSearch}