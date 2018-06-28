var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../APIController/adminController');
var upload = require('../Upload');
router.post('/login',Controller.loginandGetToken);
router.post('/addItem' ,upload.single('image'), Controller.additem);

var varifyToken= require('../TokenVerify');
router.use(varifyToken);

router.post('/addEmployee', Controller.CreateEmployee);
router.post('/Employeeindex', Controller.fetchallemps);
router.post('/findEmployee', Controller.fetchoneemp);
router.post('/delEmployee', Controller.Deleteemp);

 
module.exports = router;
