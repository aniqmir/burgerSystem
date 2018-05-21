var express= require('express');
var app= express();

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


var user_instance =require('../models/user');

exports.UserSignUP= function(req, res)
{   
  console.log(req.body);
    if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass email and password.'});
      } else {
        var newUser = new user_instance({
          name:req.body.name,email: req.body.email, password: req.body.password,
          phone:req.body.phone,address: req.body.address
        });
        // save the user
        newUser.save(function(err) {
          if (err) {
            return res.json({success: false, msg: 'This email has already been registered.'});
          }
          req.session.user=newUser._id;
          res.json({success: true, msg: 'Successful created new user.',session:req.session});
          
        });
      }
};
