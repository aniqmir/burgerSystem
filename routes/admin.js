var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../APIController/adminController');

router.post('/login',Controller.loginandGetToken);

var varifyToken= require('../TokenVerify');
router.use(varifyToken);

router.post('/addEmployee',Controller.CreateEmployee);
router.post('/Employeeindex',Controller.fetchallemps);
router.post('/findEmployee',Controller.fetchoneemp);
router.post('/delEmployee',Controller.Deleteemp);
router.post('/addItem',Controller.additem);

module.exports = router;
