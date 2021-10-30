
let Customer=require("../mongo_operations/models/CustomerModel")
var {mongo_connection_string} = require('../mongo_operations/mongo_connection')
const mongo=require("mongoose")

async function handle_request(user, callback){
    console.log("request received")

    user = new Customer(user)
    user.save((err,data)=>{
        if (err){
            callback(err,"Error");
        }
        
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;