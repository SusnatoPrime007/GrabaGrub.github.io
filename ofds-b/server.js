const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors'); //cross origin resc sharing
const bodyParser = require('body-parser');
require('dotenv').config()

// models
const CustomerModel = require('./models/customer')
const CuisineModel = require('./models/cuisine')
const FoodModel = require('./models/food')


const app = express();

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

// connect DB
    // db.getDb()

mongoose.connect(process.env.DB_CONNECTION_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}, function(err){
    if(!err)
        console.log('Successfully connected to mongodb')
    else
        console.log(err)
})

// Routes
app.get('/', (req, res)=>{
    res.send('grab your grub')
})

// new user
app.post('/newuser', async (req, res)=>{
    const data = new CustomerModel(req.body);
    try{
        let response = await data.save();
        res.send(response)
    } catch(err){
        res.send(err)
    }
})

//add new cuisine
app.post('/newcuisine', async (req, res)=>{
    const data = new CuisineModel(req.body);
    try{
        let response = await data.save();
        res.send(response)
    } catch(err){
        res.send(err)
    }
})

//add new food item
app.post('/newcuisine', async (req, res)=>{
    const data = new FoodModel(req.body);
    try{
        let response = await data.save();
        res.send(response)
    } catch(err){
        res.send(err)
    }
})


app.listen(process.env.PORT, ()=>{console.log("Server started on http://localhost:"+process.env.PORT)});