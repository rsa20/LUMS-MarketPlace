const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const moderator = new Schema({
    id: {type: Schema.Types.ObjectId, required:true }
})

module.exports = mongoose.model('Moderator', moderator);