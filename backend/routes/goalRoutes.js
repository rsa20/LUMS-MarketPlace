const express = require('express');
const router = express.Router();
const {
  getUser,
  getUserbyId,
  getUserByEmail,
  updateUserProfile,
  loginUser,
  registerUser,
  verifyUser,
  deleteAllUsers,
  deleteUser,
  getInfoRP,
} = require('../controllers/goalController');

// router.route('/').get(getGoals).post(setGoal)
// router.route('/rem:id').delete(deleteGoal).put(updateGoal)

router.route('/login').post(loginUser);
router.route('/updateProfile').put(updateUserProfile);
router.route('/register').post(registerUser);

router.route('/verify:token').get(verifyUser);

router.route('/viewProfile/:email').post(getUser);
router.route('/viewProfile/user:id').get(getUserbyId);
// this is new route and controller by moez used in Ph header
router.route('/viewProfile:email').get(getUserByEmail);
router.route('/deleteUser/:u_id').get(deleteUser);
router.route('/infoRP/:u_id').get(getInfoRP);

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
