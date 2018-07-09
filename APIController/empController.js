var express= require('express');
var app= express();
var bcrypt = require('bcrypt-nodejs');
var jwt    = require('jsonwebtoken');
//Middleware to connect to database
var mongoose = require('mongoose');
var config= require('../config');
mongoose.connect(config.database);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
(db.on('error', console.error.bind(console, 'MongoDB connection error:')));


var emp_instance =require('../models/emp');
var order_instance= require('../models/orders');

exports.loginandGetToken = function(req, res)
 {
    emp_instance.findOne(
        // query
        {Email:req.body.email}, (err, Emp) => {
if (err) return res.status(200).json(err);
if(Emp==null){return res.status(200).json(message='Invalid username');}
bcrypt.compare(req.body.password, Emp.Emp_password, function(err, isMatch) {
    if (err) { return res.json(err); }
    // Password did not match
    if (!isMatch) { return res.json({msg:'invalid Password'}) }
    else {
    //Generate JWT Token
    const payload = {
        name: req.body.email
      };
          var token = jwt.sign(payload, config.secret, {expiresIn: 86400 // expires in 24 hours
        });

 //          return the information including token as JSON
        return res.json({
            success: true,
            message: 'logged in!!! Enjoy your token!',
            token: token,
            type: 'emp'
          });
}
        });
    });
};


//Function to get all Orders
exports.neworders = function(req,res){
    order_instance.find(
        // query
        {status:'Recieved'},
        // callback function
        (err, ord) => {
            if (err) return res.status(200).json(err);
            if(ord==null)
            return res.status(200).json(message='No New Order');
            else
            return res.status(200).json(ord);
        }
    ); 
}

//Function to Dispatch an Order
exports.Dispatchorder = function(req,res){
    order_instance.findByIdAndUpdate(req.body.id,{ $set: { status: 'Dispatched' }},function (err, tank) {
        if (err) return res.json(err);
        else res.json('Success');
    });
}
//function to Process an Order
exports.Processorder = function(req,res){
    order_instance.findByIdAndUpdate(req.body.id,{ $set: { status: 'Processing' }},function (err, tank) {
        if (err) return res.json(err);
        else res.json('Success');
    });
}
//Function To Get Orders in Processing
exports.ordersInProcessing = function(req,res){
    order_instance.find(
        // query
        {status:'Processing'},
        // callback function
        (err, ord) => {
            if (err) return res.status(200).json(err);
            if(ord==null)
            return res.status(200).json(message='No Order in Processing');
            else
            return res.status(200).json(ord);
        }
    ); 
}