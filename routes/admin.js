var express = require('express');
var router = express.Router();
var Controller= require('../APIController/adminController');
var upload = require('../Upload');
router.post('/login', Controller.loginandGetToken);
router.post('/addItem' ,upload.single('image'), Controller.additem);
router.get('/allitems', Controller.fetchallitems); 

var varifyToken= require('../TokenVerify');
router.use(varifyToken);

router.post('/addEmployee', Controller.CreateEmployee);
router.post('/Employeeindex', Controller.fetchallemps);
router.post('/findEmployee', Controller.fetchoneemp);
router.post('/delEmployee', Controller.Deleteemp);
router.post('/delItem', Controller.Deleteitem);

module.exports = router;
