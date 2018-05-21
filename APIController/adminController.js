var express= require('express');
var app= express();
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

var employee_instance =require('../models/emp');

//Function To Login
exports.loginandGetToken = function(req, res)
 {

var nam= req.body.name;
var pass= req.body.password;
if(nam != 'nerd')
{
    return res.send({msg:'invalid Username'});
}
else if(pass != "1234")
{
   return res.send({msg:'password Invalid'});
}
else
{
   // res.send('login Successfull and token generated');
    //Generate JWT Token
    const payload = {
        name: nam
      };
          var token = jwt.sign(payload, config.secret, {expiresIn: 86400 // expires in 24 hours
        });

 //          return the information including token as JSON
        return res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
            type: 'head'
          });
}
};

exports.CreateEmployee= function(req, res)
{
   var empmodel = new employee_instance({ Emp_fname:req.body.fname,Emp_lname:req.body.lname,Email:req.body.email,Emp_password:req.body.password,Emp_start_date:req.body.sdate,Emp_phone:req.body.phone});
   empmodel.save(function (err) {
       if (err)
        return handleError(err);

       else
         return res.json({message:'New Employee Added Succesfully'});
         console.log("Employee Data entered");
       // saved!
   });
}

exports.fetchallemps= function(req,res){
    employee_instance.find()
    .then(Emp => {
        if(Emp==null){ res.json({message:'No Employee Found'})}
        else
       return res.json(Emp);
    }).catch(err => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving all Employeess."
        });
    });
};
//Funtion To Fetch an Employee
exports.fetchoneemp= function(req,res){
    employee_instance.findOne(
        // query
        {Email:req.body.email},

        {Emp_fname: true,Emp_email:true},

        // callback function
        (err, Emp) => {
            if (err) return res.status(200).send(err)
            if(Emp==null)
            return res.status(200).json(message='No Employee With this email')
            else
            return res.status(200).json(Emp)
        }
    );
};
//Function to Delete an Employee
exports.Deleteemp= function(req, res)
 {
  employee_instance.findOneAndRemove({Email:req.body.email})
  .then(Emp => {
      if(!Emp) {
          return res.status(404).send({
              message: "Employee not found with this email  " + req.body.email
          });
      }
      res.send({message: "Employee deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'Emp_email' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Employee not found with email " + req.body.email
          });
      }
      return res.status(500).send({
          message: "Could not delete Employee with cnic " + req.params.cnic
      });
  });
 }
