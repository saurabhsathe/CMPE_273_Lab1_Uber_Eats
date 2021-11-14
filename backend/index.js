
var express = require('express');
var app = express();
var session = require('express-session');
var cors = require('cors');
const multer = require('multer')
const path = require("path")
const fs = require("fs")
const {promisify} = require("util")
const s3upload = require("./upload_file")
var updatedish=require('./db_operations/update_dish')
var host="http://localhost"
var kafka = require('./kafka/client');
const {checkAuth} = require("./Utils/passport")
const { auth } = require("./Utils/passport");

app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
auth();

app.use(bodyParser.json());
const jwt = require("jsonwebtoken")

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
var {mongo_connection_string} = require('./mongo_operations/mongo_connection')
const mongo=require("mongoose")
let Dummy=require("./mongo_operations/models/DummyModel")
let Customer=require("./mongo_operations/models/CustomerModel")
var Restaurant=require("./mongo_operations/models/RestaurantsModel")
var RestoOwner = require("./mongo_operations/models/RestaurantOwnerModel")
var Dishes = require("./mongo_operations/models/DishesModel")
var Favourites = require("./mongo_operations/models/FavouritesModel");




//var mongodb=mongo.connect(mongo_connection_string,options)
var mongodb=mongo.connect(mongo_connection_string,options)

//Route to handle Post Request Call

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Route to handle Post Request Call
var storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
  
  var upload = multer({ storage:storage })
app.post('/updateDish',checkAuth,async function(req,res){
    console.log("Request received to update dish",req.body)
    try{
     
        await kafka.make_request('update_dish',req.body, function(err,result){
           
            if (err){
                res.writeHead(500,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error")
            }
            else{
                res.writeHead(200,{
                    'Content-Type' : 'text/plain'
                })
                res.end("dish updated successully")
            }
            })
    
    


}
catch(error){
    console.log(error)
}
        
    

    

    
});
//mongo connection
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

//customer login through kafka
app.post('/customerlogin',async function(req,res){
    
    
    console.log("login request received")
    let user=req.body
    await kafka.make_request('customer_login',user, function(err,results){

        console.log('in result');
        console.log(results);
        if (err){
            console.log(err)
            console.log("Inside err");
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("error reaching database")
        }else{
            if (results.length==0){
                res.writeHead(202,{
                    'Content-Type' : 'text/plain'
                })
                res.end("account does not exist")
            }
            else{
                //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                res.writeHead(200,{
                    'Content-Type' : 'text/plain'
                })
                const payload = { _id: results._id, email: results.email,user_type:"customer"};
            const token = jwt.sign(payload, "cmpe273_secret_key" );
            res.end("JWT "+token);
                //res.end(JSON.stringify(results))
            }
            
            }
        
    });
    
    
});


//Route to handle customer signup request
app.post('/add_customer',upload.single("dp"),async function(req,res){
    console.log("request received")
    let user=JSON.parse(req.body.data)
    user = new Customer(user)
    Customer.findOne({email:user.email},async (err,dummy)=>{
        if (err){
            console.log(err)
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            })
            res.end("error")

        }
        if(dummy){
            console.log(dummy)
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("dummy exists")
        }
        else{
            console.log("account does not exists",dummy)
            let fileloc="./public/"+res.req.file.filename
            let fname=user.email.split("@")[0]+path.extname(res.req.file.originalname)
       
            user.userdp = await s3upload.upload_to_s3(fileloc,"ubereatscustomerimagesbucket",fname)


            await kafka.make_request('customer_registration',user, function(err,results){

                console.log('in result');
                console.log(results);
                if (err){
                    console.log(err)
                    console.log("Inside err");
                    res.writeHead(400,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("error reaching database")
                }else{
                    
                        //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                        res.writeHead(200,{
                            'Content-Type' : 'text/plain'
                        })
                        res.end("customer registered successfully")
                    
                    
                    }
                
            });
            
        }
    })
    
        
    

    

    
});

//Route to handle restaurant owner signup request
app.post('/owner_signup',upload.single("dp"),async function(req,res){
    console.log("request received")
    let user=JSON.parse(req.body.data)
    
    RestoOwner.findOne({email:user.email},async (err,dummy)=>{
        if (err){
            console.log(err)
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            })
            res.end("error")

        }
        if(dummy){
            console.log(dummy)
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("dummy exists")
        }
        else{
            
            console.log("account does not exists",dummy)
            let fileloc="./public/"+res.req.file.filename
            let fname=user.email.split("@")[0]+path.extname(res.req.file.originalname)
       
            user.userdp = await s3upload.upload_to_s3(fileloc,"ubereatscustomerimagesbucket",fname)


            await kafka.make_request('owner_registration',user, function(err,results){

                console.log('in result');
                console.log(results);
                if (err){
                    console.log(err)
                    console.log("Inside err");
                    res.writeHead(400,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("error reaching database")
                }else{
                    
                        //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                        res.writeHead(200,{
                            'Content-Type' : 'text/plain'
                        })
                        res.end("customer registered successfully")
                    
                    
                    }
                
            });
            
        }
    })
    
        
    

    

    
});
//Route to handle restaurant signup request
app.post('/restosignup',upload.single("restdp"),async function(req,res){
    console.log("int the resto signup")
    let resto=JSON.parse(req.body.data)    
    let stored_file_name=res.req.file.originalname
    resto=new Restaurant(resto)
    let fileloc="./public/"+res.req.file.filename
    console.log(resto)
    Restaurant.findOne({resteraunt_name:resto.resteraunt_name,zipcode:resto.zipcode},async (err,result)=>{
       
        if (err){
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            })
            res.end("error")
        }
        else if(result){
            fs.unlinkSync(fileloc)
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("Restaurant already exists")
        }
        else{
            
         fname=resto.resteraunt_name+resto.zipcode+path.extname(fileloc)
            resto.restdp = await s3upload.upload_to_s3(fileloc,"ubereatsrestaurantimages",fname)
            fs.unlinkSync(fileloc)
            console.log("in the restaurant registration")
            await kafka.make_request('resto_registration',resto, function(err,results){

                console.log('in result');
                console.log(results);
                if (err){
                    console.log(err)
                    console.log("Inside err");
                    res.writeHead(400,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("error reaching database")
                }else{
                    
                        //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                        res.writeHead(200,{
                            'Content-Type' : 'text/plain'
                        })
                        res.end("Restaurant registered successfully")
                    
                    
                    }
                
            });
            
        }
            })
        

    

    
    
    

    
});


//Route to handle restaurant login request
app.post('/restologin',async function(req,res){
    
    
    console.log("resto login request received")
    let user=req.body
    
    RestoOwner.findOne({email:user.email,pwd:user.password},async (err,dummy)=>{
        if (err){
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            })
            res.end("error")
        }
      
        if(dummy){
            //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
           
            Restaurant.findOne({owner_email:user.email},async (err,resto_details)=>{
                if (err){
                    res.writeHead(500,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("encountered an error")
        

                }
                else
                {    

                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    const payload = { _id: dummy._id, resteraunt_name:resto_details.resteraunt_name,zipcode:resto_details.zipcode,restdp:resto_details.restdp,user_type:"owner"};
                    const token = jwt.sign(payload, "cmpe273_secret_key", {
                        expiresIn: 1008000
                    });
                    res.end("JWT "+token);
                    //res.end(JSON.stringify(resto_details))
        
                }  
            })



        }
        else{
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("account does not exist")
        }
    })

    

    
});


//adding dish
app.post('/addDish',upload.single("dp"),async function(req,res){
    console.log("received a request to add dish-------->",req.body.data)
    let dish=JSON.parse(req.body.data)    
    
        let fileloc="./public/"+res.req.file.filename
       
        
        

        
        Dishes.findOne({resteraunt_name:dish.restaurant_name,zipcode:dish.zipcode,dish_name:dish.dish_name},async (err,result)=>{
          
        if (err){
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            })
            res.end("error")
        }
        else if(result){
            fs.unlinkSync(fileloc) 
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Restaurant already exists")
        }
        else{
            
         
            let fname=dish.resteraunt_name+dish.zipcode+dish.dish_name+path.extname(res.req.file.originalname)
       
            dish.dishdp = await s3upload.upload_to_s3(fileloc,"ubereatsdishimages",fname)
            fs.unlinkSync(fileloc)
            
            
            console.log("in the dish addition")
            await kafka.make_request('add_dish',dish, function(err,results){

                console.log('in result');
                console.log(results);
                if (err){
                    console.log(err)
                    console.log("Inside err");
                    res.writeHead(400,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("error reaching database")
                }else{
                    
                        //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                        res.writeHead(200,{
                            'Content-Type' : 'text/plain'
                        })
                        res.end("dish added successfully")
                    
                    
                    }
                
            });
            
        }
        })
    
    
    
    
    

    
});
//getdishes for a restaurant
app.post('/getDishes',async function(req,res){
    
    try{
     
        
        await kafka.make_request('get_dishes',req.body, function(err,results){

            console.log('in result');
            console.log(results);
            if (err){
                console.log(err)
                console.log("Inside err");
                res.writeHead(400,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error reaching database")
            }else{
                
                    //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end(JSON.stringify(results))
                
                
                }
            
        });


}
catch(error){
    console.log(error)
}
        
    

    

    
});

//to get all restaurants
app.post('/getallResto',async function(req,res){
    
    try{
     
        
        await kafka.make_request('get_restos',{}, function(err,results){

            console.log('in result');
            console.log(results);
            if (err){
                console.log(err)
                console.log("Inside err");
                res.writeHead(400,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error reaching database")
            }else{
                
                    //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end(JSON.stringify(results))
                
                
                }
            
        });

    
    }
    catch(error){
        console.log(error)
    }
            
        
});



//add to favourites
app.post('/addTofavourites',checkAuth,async function(req,res){
    console.log(" in the favourites------------>")
    try{


        Favourites.findOne(req.body,async (err,result)=>{
          
            if (err){
                res.writeHead(500,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error")
            }
            if(result){
               
                res.writeHead(202,{
                    'Content-Type' : 'text/plain'
                })
                res.end("Restaurant already added as favourite")
            }
            else{
        await kafka.make_request('add_favourite',req.body, function(err,results){

            if (err){
             
                res.writeHead(400,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error reaching database")
            }else{
                
                    //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("added as favourite")
                
                
                }
            
        });}})

}
catch(error){
    console.log(error)
}
        
    

    

    
});
//get favourites of the customer
app.post('/getfavourites',checkAuth,async function(req,res){
    console.log("you are inside------------------------>")
    try{
     
        
        await kafka.make_request('get_favourites',req.body, function(err,results){

            console.log('in result');
            console.log(results);
            if (err){
                console.log(err)
                console.log("Inside err");
                res.writeHead(400,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error reaching database")
            }else{
                
                    //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end(JSON.stringify(results))
                
                
                }
            
        });
    
    
    }
    catch(error){
        console.log(error)
    }  
    

    

    
});
//get address of customer
app.post('/getcustdetails',checkAuth,async function(req,res){
    //{email:req.body}
    try{
        
        await kafka.make_request('get_address',req.body, function(err,result){
           console.log("kafka----------------------result",result)
            if (err){
                res.writeHead(500,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error")
            }
            else if(result){
                console.log(result)
                res.writeHead(200,{
                    'Content-Type' : 'text/plain'
                })
                res.end(JSON.stringify(result))
            }
            else{
                res.writeHead(400,{
                    'Content-Type' : 'text/plain'
                })
                res.end("No Restaurants found")
                
            }
            })
    

}
catch(error){
    console.log(error)
}
        
    

    

    
});

//place order
app.post('/placeOrder',checkAuth,async function(req,res){
        console.log("received",req.body)
        
        
        await kafka.make_request('place_order',req.body, function(err,result){
           
            if (err){
                res.writeHead(500,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error")
            }
            else{
                res.writeHead(200,{
                    'Content-Type' : 'text/plain'
                })
                res.end("order placed successully")
            }
            })
    
    
    


});



//get customer orders
app.post('/getCustOrders',checkAuth,async function(req,res){
    console.log("received request for customer orders",req.body.email)
    try{
        
        
        await kafka.make_request('get_cust_orders',req.body, function(err,results){

            console.log('in result');
            console.log(results);
            if (err){
                console.log(err)
                console.log("Inside err");
                res.writeHead(400,{
                    'Content-Type' : 'text/plain'
                })
                res.end("error reaching database")
            }else{
                
                    //res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end(JSON.stringify(results))
                
                
                }
            
            });
    
    
    }
    catch(error){
        console.log(error)
    }      
    

    

    
});
//update orders already placed
app.post('/updateOrder',async function(req,res){
    
    try{
     
        await kafka.make_request('update_order',req.body, function(err,result){
            console.log(result)
             if (err){
                 console.log(err)
                 res.writeHead(500,{
                     'Content-Type' : 'text/plain'
                 })
                 res.end("encountered an error")
                 
             }else{
                 res.writeHead(200,{
                     'Content-Type' : 'text/plain'
                 })
                 res.end("updated successfully")
             
                }
            })
     
     
     }
     catch(error){
         console.log(error)
     }      
     
 
     
    

    

    
});

//get orders for a specific restaurant
app.post('/getRestoOrders',checkAuth,async function(req,res){
     //req.body.restaurant_name,req.body.zipcode,req.body.type
    console.log(req.body)
     
    try{
     
        await kafka.make_request('get_resto_orders',req.body, function(err,result){
            console.log(result)
             if (err){
                 console.log(err)
                 res.writeHead(500,{
                     'Content-Type' : 'text/plain'
                 })
                 res.end("error")
                 
             }
             else if(result){
                 res.writeHead(200,{
                     'Content-Type' : 'text/plain'
                 })
                 res.end(JSON.stringify(result))
             }
             else{
                 res.writeHead(400,{
                     'Content-Type' : 'text/plain'
                 })
                 res.end("No Restaurants found")
                 
             }
             })
     

    }
catch(error){
    console.log(error)
}
        
    

    

    
});
app.post('/updateCust',checkAuth,async function(req,res){
    //req.body.restaurant_name,req.body.zipcode,req.body.type
    console.log("update profile")
   try{
     
    await kafka.make_request('update_profile',req.body, function(err,result){
        console.log("updateeeeeeeeeeeeeeeeeeeeeeeeeeee----profile",result)
         if (err){
             res.writeHead(500,{
                 'Content-Type' : 'text/plain'
             })
             res.end("encountered an error")
             
         }else{
             res.writeHead(200,{
                 'Content-Type' : 'text/plain'
             })
             res.end("updated successfully")
         
            }
        })
 
 
 }
 catch(error){
     console.log(error)
 }      
 

     
   

   

   
});
//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");