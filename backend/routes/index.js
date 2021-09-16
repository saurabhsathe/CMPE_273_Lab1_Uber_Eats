var express = require('express');
var router = express.Router();

/* GET home page. */

users=[{username:"admin",password:"admin"}]

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("Hello from backend")
});
router.post('/login',function(req,res){
  for (user of users){
    if(user.username==req.body.username && user.password==req.body.password){
      res.send({status:"ok",msg:"success"})
    }
    else{
      res.send("invalid credentials")
    }
  }

})

module.exports = router;
