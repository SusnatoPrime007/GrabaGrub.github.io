const mongoose = require('mongoose');

const CuisineSchema = mongoose.Schema({
    name:String,
	img:String
})

module.exports = mongoose.model('Cuisine', CuisineSchema)