const express = require('express')
const router = express.Router()

const {simpleSearch, filterSearch} = require('../controllers/searchController')

router.route('/simpleSearch').get(simpleSearch)
router.route('/filterSearch').get(filterSearch)

module.exports = router