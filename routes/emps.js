var express = require('express');
var router = express.Router();
var app=express();
var Controller= require('../APIController/empController');
router.post('/login',Controller.loginandGetToken);
var varifyToken= require('../TokenVerify');
router.use(varifyToken);
router.post('/showOrders',Controller.neworders);



module.exports = router;