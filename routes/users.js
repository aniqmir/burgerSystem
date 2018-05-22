var express = require('express');
var router = express.Router();
var clientController= require('../APIController/UserController');

router.post('/signup',clientController.UserSignUP);
router.post('/login',clientController.Userlogin);
router.post('/placeorder',clientController.order);

module.exports = router;
