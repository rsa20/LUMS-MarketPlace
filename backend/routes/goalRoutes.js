const express = require('express');
const router = express.Router();
const {
  getUser,
  getUserbyId,
  updateUserProfile,
  loginUser,
  registerUser,
  verifyUser,
  deleteAllUsers,
} = require('../controllers/goalController');

// router.route('/').get(getGoals).post(setGoal)
// router.route('/rem:id').delete(deleteGoal).put(updateGoal)

router.route('/login').post(loginUser);
router.route('/updateProfile').put(updateUserProfile);
router.route('/register').post(registerUser);

router.route('/verify:token').get(verifyUser);

router.route('/viewProfile').post(getUser);
router.route('/viewProfile/:id').get(getUserbyId);

// router.get('/', getGoals)

// router.post('/', (req, res) =>{
//     res.status(200).json({message:'Set goals'})
// })

// router.put('/:id', (req, res) =>{
//     res.status(200).json({message:`Update goals ${req.params.id}`})
// })

// router.delete('/:id', (req, res) =>{
//     res.status(200).json({message:`Delete goals ${req.params.id}`})
// })

module.exports = router;
