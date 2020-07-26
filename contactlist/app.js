//export all the dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on successful conncetion
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
});

//on error while mongodb connection
mongoose.connection.on('error',(err)=>{
    console.log('error while connecting to mongodb');
})
//define port no
const port = 3000;

//adding middleware -cors
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route); 

//testing server
app.get('/',(req,res)=>{
    res.send('Testing server - foobar');
});

//bind port
app.listen(port,()=>{
    console.log('Server Started at Port :'+port);
});