

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

const updateUserProfile = (async (req, res) => {
    
    const user = await User.findOne({email: req.body.email});

    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if(req.body.password){
        const hash = await bcrypt.hash(req.body.password, 10)
        user.password = hash
    }
    // user.password = req.body.password || user.password;

    const updatedUser = await User.findOneAndUpdate({ _id: user._id }, user, {new: true});

    res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email
    });

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
    updateUserProfile,
    deleteAllUsers,
    getUser
}