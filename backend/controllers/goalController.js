

const Goal = require('../models/goalModel')
const User = require('../models/userModel')
const bcrypt = require("bcrypt")

// get all goals
// 
const getGoals = (async (req, res)=>{
    const goals = await Goal.find()

    res.status(200).json(goals)
})

const getUser = (async(req, res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(404).json({message: 'User not found'});
    }
    res.json(user)
})





const setGoal = (async (req, res)=>{
    const goal = await Goal.create({
        newCollec: req.body.hmm
    })

    res.status(200).json(goal)

})

const deleteAllUsers = (async(req, res)=>{
    User.deleteMany({email: {$ne :""}})
    res.status(200).json({message:"DELETED USERS"})
})

const updateGoal = (req, res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

const deleteGoal = (req, res)=>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    
    deleteAllUsers,
    getUser
}