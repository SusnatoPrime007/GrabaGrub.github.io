const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    cus_id:mongoose.ObjectId,
    text:String,
})

const FoodSchema = mongoose.Schema({
    cuisine_id:String,
    type:String,
    price:Number,
    name:String,
    images:[String],
    desc:String,
    likes:Number,
    comments:[CommentSchema],
    share:Number
})

module.exports = mongoose.model('Food', FoodSchema)