const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "images",
    allowedFormats: ["jpg", "png", "jpeg", "bmp"],
    transformation: [
        { if: "w_gt_1900", width: 1900, crop: "scale" },
        { if: "h_gt_1900", height: 1900, crop: "scale" },
        { quality: "auto" },
        { format: 'jpg' }
     ],

})

const parser = multer({storage:storage});

module.exports = parser