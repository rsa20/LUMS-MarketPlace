const express = require('express')
const router = express.Router()

const parser = require('../config/cloudinary')

router.post('/upload', parser.single('file'), (req, res)=>{
    // console.log("req", req.body)
    // console.log("image path", req.body.file.public_id)
    const imgURL = req.file.path;


    console.log("image id: ", imgURL)
    res.json(imgURL)
})

module.exports = router