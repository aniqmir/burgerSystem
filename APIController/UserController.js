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
var order_instance= require('../models/orders');

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
          req.session.userid=newUser._id;
          req.session.username=newUser._name;
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
  if(req.session.userid==null && req.session.username==null ){req.session.userid=user._id;  req.session.username=user.name;}
  res.json({msg:'Login Complete',userid:req.session.userid,username:user.name});
});
});
};

//Function to Place New Order
exports.order= function(req, res){
  console.log(req.body);
  res.send('we are here')
  //var ord = new order_instance({products:req.body.products, total:req.body.total,customer_email:req.body.email,
   // date_sale:req.body.date,customer_address:req.body.address});
   
   //ord.save(function (err) {
     //  if (err)
       // return res.json(err);
       //else
         //return res.json({message:'Order Recieved'});
   //});
       // saved!
}