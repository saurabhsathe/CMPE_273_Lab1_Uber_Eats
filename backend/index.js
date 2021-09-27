//import the require dependencies
var insert_user =require('./db_operations/insert_user')
var s3=require("./aws_handler/aws_credential_store")
var email_exists =require('./db_operations/email_exists')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');

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
app.use(bodyParser.json());

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
      username : "admin",
      password : "admin"
  }]

  

//Route to handle Post Request Call
app.post('/customerlogin',function(req,res){
    let flag=0  
    for(user of Users){
      if(user.username === req.body.username && user.password === req.body.password){
            flag=1;
            break;
        }
      }
    if(flag==1){
        res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
            req.session.user = user;
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            res.end("Successful Login");

      
    }
    else{
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("User does not exists");
    }

    

    

    
});


//Route to handle Post Request Call
app.post('/usersignup',function(req,res){
        let user={}
        user.fullname = req.body.fullname;
        user.address= req.body.address;
        user.zipcode= req.body.zipcode;
        user.contact= req.body.contact;
        user.password= req.body.password;
        user.email= req.body.email;
        user.userdp= req.body.userdp;
        let x =email_exists.testemail(req.body.email,"customer") 
            
        
        if(!x){
            console.log("already present") 
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("Email id is already registered");
    

        }
        else{
            console.log("new email id found")
            console.log(user.userdp)
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            res.end("User euccessfully registered");
    
        }
    
    
    

    
});

app.post('/create',function(req,res){
    
    
    flag=0
    books.filter(function(book){
        if(book.BookID === req.body.bookid){
            flag=1
        }
    })
    if(flag==0){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("Book inserted successfully");
    
    
    books.push({"BookID" : req.body.bookid, "Title" : req.body.title, "Author" : req.body.author})
    
    }
    else{
        console.log("already present")
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("Book already exists");
    
    
    }

    
});



app.post('/delete',function(req,res){
    
    console.log("inside delete",req.body)
    
    let flag=0
    let tempbooks=[]
    books.filter(function(book){
        if(book.BookID == req.body.bookid){
            //book found
            flag=1
        }
        else{
            //book not found so append
            tempbooks.push(book)
        }
    })
    if(flag==1){
        books=tempbooks
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("Book deleted successfully");
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
         })
        res.end("Book Not found");
    }


    
});
//Route to get All Books when user visits the Home Page
app.get('/home', function(req,res){
    console.log("Inside Home Login");    
    res.writeHead(200,{
        'Content-Type' : 'application/json'
    });
    console.log("Books : ",JSON.stringify(books));
    res.end(JSON.stringify(books));
    
})
//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");