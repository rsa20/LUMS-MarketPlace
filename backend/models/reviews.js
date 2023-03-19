const mongoose = require('mongoose');
require('mongoose-type-email');


const Schema = mongoose.Schema;

const reviews = new Schema({
    reviewer: {type: Schema.Types.ObjectId, required:true },
    reviewed: {type: Schema.Types.ObjectId, required:true },
    score: {type:Number, required:true, min:1,max:5},

});

module.exports = mongoose.model('Reviews', reviews);