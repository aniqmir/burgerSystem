var express = require('express');
var router = express.Router();
var clientController= require('../APIController/UserController');

router.post('/signup',clientController.UserSignUP);
router.post('/login',function(req,res){
    if(req.session.user)
    res.send({message:'no need to login',user:req.session.user});
    else
    res.send(req.sessionID);
});
module.exports = router;
