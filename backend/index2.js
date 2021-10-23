
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
var getresto  = require('./db_operations/getresto_info')
var insert_dish = require('./db_operations/insert_dish')
var get_dishes =  require('./db_operations/get_dishes')
var getall_dishes =  require('./db_operations/getalldishes')
var getall_restos = require('./db_operations/getall_restaurants')
var insert_favourite = require('./db_operations/add_favourites')
var get_favourite = require('./db_operations/get_favourites')
var getcust_addr = require('./db_operations/getcust_addr')
var place_order = require('./db_operations/insert_order')
var getcust_orders =require('./db_operations/get_cust_orders')
var update_order = require('./db_operations/update_order')
var get_resto_orders=require('./db_operations/get_resto_orders')
var updatedish=require('./db_operations/update_dish')
var connect_mongo = require('./example2')
var host="http://localhost"
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

//use cors to allow cross origin resource sharing
app.use(cors({ origin: host+':3000', credentials: true }));

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
    res.setHeader('Access-Control-Allow-Origin', host+':3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

var options={
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    maxpoolSize:500,
    
}
const mongo=require("mongoose")
var {mongo_connection_string} = require('./mongo_operations/mongo_connection')
var mongodb=mongo.connect(mongo_connection_string,options)
  

//Route to handle Post Request Call
app.post('/customerlogin',async function(req,res){
    var flag
    try{
        console.log(req.body)
     flag = await verify_user.auth_user(req.body.email,req.body.password,req.body.usertype)
}
catch(error){
    console.log(e)
}
    console.log(flag)
    if(flag==true){
        res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
            res.writeHead(200,{
                'Content-Type' : 'text/plain'
            })
            if (req.body.usertype=="restaurant_owner"){
                data=await getresto.getown(req.body.email)
                res.end(JSON.stringify(data));
            }
            else{
                res.end("Successful Login");

            }

                

            

      
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

app.post('/addDish',upload.single("dp"),async function(req,res){
    let dish=JSON.parse(req.body.data)    
    
        let fileloc="./public/"+res.req.file.filename
        let fname=dish.resteraunt_name+dish.zipcode+dish.dish_name+path.extname(res.req.file.originalname)
       
        dish.dishdp = await s3upload.upload_to_s3(fileloc,"ubereatsdishimages",fname)
        
        x=await insert_dish.insertdish(dish)
        console.log(x)
        fs.unlinkSync(fileloc)
        if(x==true){
        console.log("in the new dish section")
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("Dish successfully registered");
        }
        else{
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("Dish could not be added");
                
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

app.post('/getDishes',async function(req,res){
    
    try{
     
     result = await get_dishes.getdishes_resto(req.body.resteraunt_name,req.body.zipcode)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end()
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});

app.post('/getallDishes',async function(req,res){
    
    try{
     
     result = await getall_dishes.getdishes_resto()
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("No data found")
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});

app.post('/getallResto',async function(req,res){
    
    try{
     
     result = await getall_restos.getrestos_all()
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("No data found")
    }


}
    catch(error){
        console.log(error)
    }
});

app.post('/addTofavourites',async function(req,res){
    
    try{
     let details=req.body
     result = await insert_favourite.insertfavourite(details)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("Inserted successfully")
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("Some technical issue")
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});

app.post('/getfavourites',async function(req,res){
    
    try{
        let details=req.body.email
        result = await get_favourite.getfavourite(details)
        if(result!=false){
           res.writeHead(200,{
               'Content-Type' : 'text/plain'
           })
           res.end(JSON.stringify(result))
       }
       else{
           res.writeHead(202,{
               'Content-Type' : 'text/plain'
           })
           res.end("No data found")
       }
   

}
catch(error){
    console.log(error)
}
        
    

    

    
});

app.post('/getaddress',async function(req,res){
    
    try{
        let details=req.body.email
        result = await getcust_addr.getcust_address(details)
        if(result!=false){
          console.log("here is your result")
           res.writeHead(200,{
               'Content-Type' : 'text/plain'
           })
           res.end(JSON.stringify(result))
       }
       else{
           res.writeHead(202,{
               'Content-Type' : 'text/plain'
           })
           res.end("No data found")
       }
   

}
catch(error){
    console.log(error)
}
        
    

    

    
});
app.post('/placeOrder',async function(req,res){
    
    try{
     let details=req.body
     result = await place_order.insertorder(details)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        console.log("inserted_successfully")
        res.end("Inserted successfully")
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("Some technical issue")
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});

app.post('/getCustOrders',async function(req,res){
    console.log("received request")
    try{
     console.log(req.body.order_type)
     result = await getcust_orders.getorders_cust(req.body.email,req.body.order_type)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        console.log("returning request")
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end()
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});
app.post('/updateOrder',async function(req,res){
    
    try{
     
     result = await update_order.update_order_status(req.body.id,req.body.status)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("updation done")
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end()
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});


app.post('/getRestoOrders',async function(req,res){
    
    try{
     
     result = await get_resto_orders.getorders_resto(req.body.restaurant_name,req.body.zipcode,req.body.type)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end()
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});


app.post('/updateDish',async function(req,res){
    console.log("Request received",req.body)
    try{
     
     result = await updatedish.update_dish(req.body)
     if(result!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("done")
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("had some issues")
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});

app.get('/connect_mongo',async function(req,res){
    
    try{
     console.log(mongodb)
     
     if(mongodb!=false){
        res.writeHead(200,{
            'Content-Type' : 'text/plain'
        })
        res.end("done")
    }
    else{
        res.writeHead(202,{
            'Content-Type' : 'text/plain'
        })
        res.end("had some issues")
    }


}
catch(error){
    console.log(error)
}
        
    

    

    
});

//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");