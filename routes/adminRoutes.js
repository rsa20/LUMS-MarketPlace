const express = require('express');
const router = express.Router();

const { getAdminId, getAllUsers } = require('../controllers/adminControllers');

router.route('/getAdmin').get(getAdminId);
router.route('/allUsers:adminId').get(getAllUsers);

module.exports = router;
