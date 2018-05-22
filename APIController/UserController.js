var express= require('express');
var app= express();
var bcrypt = require('bcrypt-nodejs');
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
          res.json({success: true, msg: 'Successful created new user.'});
          
        });
      }
};
//Function to get User Logged in
exports.Userlogin= function(req, res)
{   
    user_instance.findOne(
        // query
        {email:req.body.email}, (err, user) => {
if (err) return res.json(err);
if(user==null)
{
   return res.status(200).json(message='Invalid Email')
}
bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
  if (err) { return res.json(err); }
  // Password did not match
  if (!isMatch) { return res.json({msg:'invalid Password'}) }
  if(req.session.user==null){req.session.user=user._id;}
  res.json({msg:'Login Complete',useris:req.session.user});
});
});
};