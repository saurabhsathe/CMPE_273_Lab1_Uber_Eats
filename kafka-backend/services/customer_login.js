
let Customer=require("../mongo_operations/models/CustomerModel")
var {mongo_connection_string} = require('../mongo_operations/mongo_connection')
const mongo=require("mongoose")

var mongodb=mongo.connect(mongo_connection_string,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    maxpoolSize:500,
    
},(err,client)=>{
    if (err){
        console.log("error connecting to the database")
        console.log(err)
    }
    else{
        console.log("mongo db connection successful")
    }
})
console.log("connection status",console.log(mongo.connection.readyState))
async function handle_request(user, callback){
    var res = {};
    console.log("connection status--->",console.log(mongo.connection.readyState))
    console.log("In handle request:"+ JSON.stringify(user));
    
    console.log({email:user.email,pwd:user.password})
    try{
    await Customer.findOne({email:user.email,pwd:user.password},async (err,dummy)=>{
        console.log("result is",dummy)
        if (err){
            callback(err,"Error");
        }
      
        if(dummy){
            callback(null,dummy);
        }
        else{
            callback(null,[]);
        }
    })
}
catch(err){
    console.log(err)
}
   
}

exports.handle_request = handle_request;