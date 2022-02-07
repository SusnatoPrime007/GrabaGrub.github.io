const mongoose = require('mongoose');
const AddressSchema = new mongoose.Schema({
    type:String,
    house_no:String,
    street_name:String,
    city:String,
    pin:String,
    landmark:String,
    floor:String
})
const CustomerSchema = new mongoose.Schema({
    name:String,
	email:String,
    phone:String,
	address:[AddressSchema],
})

module.exports = mongoose.model('Customer', CustomerSchema)