
var insert_user =require('./db_operations/insert_user')
var s3=require("./aws_handler/aws_credential_store")
var email_exists =require('./db_operations/email_exists')
var resto_exists =require('./db_operations/resto_exists')
var express = require('express');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const multer = require('multer')
const path = require("path")
const fs = require("fs")
const {promisify} = require("util")
const pipeline = promisify(require("stream").pipeline)
const s3upload = require("./upload_file")
var insert_resto =require('./db_operations/insert_resto')
var verify_user = require('./db_operations/verify_user_credentials')
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret              : 'cmpe273_kafka_passport_mongo',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  var Users = [{
      username : "admin@gmail.com",
      password : "admin"
  }]

  

//Route to handle Post Request Call
app.post('/customerlogin',async function(req,res){
    var flag
    try{
     flag = await verify_user.auth_user(req.body.email,req.body.password,req.body.usertype)
}
catch(error){
    console.log(e)
}
    console.log(flag)
    if(flag==true){
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            res.end("Successful Login");

      
    }
    else{
            console.log("does not exists")
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("User does not exists");
    }

    

    

    
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Route to handle Post Request Call
var storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
  
  var upload = multer({ storage:storage })
 
app.post('/usersignup',upload.single("dp"),async function(req,res){
    let user=JSON.parse(req.body.data)    
    x= await email_exists.testemail(user.email,user.usertype)
    console.log("here-----afterchecking if email exists",x)
    
    if(x==true){
        console.log("already present") 
        
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("Email id is already registered");


    }
    else{
        //ubereatscustomerimagesbucket
        
        let fileloc="./public/"+res.req.file.filename
        let fname=user.email.split("@")[0]+path.extname(res.req.file.originalname)
       
        user.userdp = await s3upload.upload_to_s3(fileloc,"ubereatscustomerimagesbucket",fname)
        console.log(user.userdp)
        console.log("new email id found")
        
        x=await insert_user.insertuser(user,user.usertype)
        fs.unlinkSync(fileloc)
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("User euccessfully registered");

    }
    
    
    
    

    
});

app.post('/restosignup',upload.single("restdp"),async function(req,res){
    console.log("int the resto signup")
    let resto=JSON.parse(req.body.data)    
    x= await resto_exists.testresto(resto.fullname,resto.zipcode)
    console.log("here-----afterchecking if resteraunt exists in restaurant signup",x)
    let fileloc="./public/"+res.req.file.filename
        
    
    if(x==true){
        console.log("already present") 
        
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("Restaurant is already registered");


    }
    else{
        //ubereatscustomerimagesbucket
        
        let fname=resto.name+resto.zipcode+path.extname(res.req.file.originalname)
       
        resto.restdp = await s3upload.upload_to_s3(fileloc,"ubereatscustomerimagesbucket",fname)
        
        x=await insert_resto.insertresto(resto)
        fs.unlinkSync(fileloc)
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("Restaurant registered");

    }
    
    
    
    

    
});





//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");