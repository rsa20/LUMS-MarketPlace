const express = require('express');
const router = express.Router();

const { getAdminId } = require('../controllers/adminControllers');

router.route('/getAdmin').get(getAdminId);

module.exports = router;
