const express = require('express')
const router = express.Router()
const {getUser, getGoals, setGoal, updateGoal, deleteGoal, updateUserProfile, deleteAllUsers} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/rem:id').delete(deleteGoal).put(updateGoal)

router.route('/updateProfile').put(updateUserProfile)

router.route('/viewProfile').post(getUser)
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



module.exports = router