const express = require('express')
const router = express.Router()

const {simpleSearch, filterSearch} = require('../controllers/searchController')

router.route('/simpleSearch').post(simpleSearch)
router.route('/filterSearch').post(filterSearch)

module.exports = router