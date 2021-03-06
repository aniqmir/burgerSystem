var express= require('express');
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
var item_instance =require('../models/items');


//Function To Login
exports.loginandGetToken = function(req, res)
 {
 console.log('We are here');
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
            type: 'admin'
          });
}
};

exports.CreateEmployee= function(req, res)
{
   var empmodel = new employee_instance({ Emp_fname:req.body.fname,Emp_lname:req.body.lname,Email:req.body.email,
    Emp_password:req.body.password,Emp_start_date:req.body.sdate,Emp_phone:req.body.phone});
   empmodel.save(function (err) {
       if (err)
        return res.json(err);

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
            if (err) return res.status(200).json(err)
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
     console.log(req.body.Email);
  employee_instance.findOneAndRemove({Email:req.body.Email})
  .then(Emp => {
      console.log(Emp);
      if(!Emp) {
          return res.status(404).send({
              message: "Employee not found with this email  " + req.body.email
          });
      }
      res.send({message: "Employee deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'Email' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Employee not found with email " + req.body.email
          });
      }
  });
 }
//Function To Add New Item
exports.additem= function(req,res){
    console.log('we are here');
    console.log(req.file);
    console.log(req.body);
    var itemmodel = new item_instance({item_name:req.body.name,
        item_desc:req.body.desc,
        item_added_date:req.body.date,
        item_type:req.body.type,
        item_price:req.body.price,
        build:req.body.build,
        imgPath:req.file.filename,
        ingredients: req.body.buildIngredients,
        primaryKey: req.file.filename.substring(0, 4),
    });
    itemmodel.save(function (err) {
        if (err)
         return res.json(err);
 
        else
          return res.json({message:'New Item Added Succesfully'});
        // saved!
    });
}
exports.fetchallitems= function(req,res){
    item_instance.find()
    .then(itm => {
        if(itm==null){ res.json({message:'No item Found'})}
        else
       return res.json(itm);
    }).catch(err => {
        return res.send({
            message: err.message || "Some error occurred while retrieving all Items."
        });
    });
};
exports.Deleteitem= function(req, res)
 {
     console.log(req.body.pk)
  item_instance.findOneAndRemove({ primaryKey:req.body.pk})
  .then(itm=> {
      if(!itm) {
          console.log(itm)
          return res.status(404).send({
              message: "Item not found with this key  " + req.body.pk
          });
      }
      res.send({message: "Item deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'PrimaryKey' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Item not found with key " + req.body.pk
          });
      }
  });
 }