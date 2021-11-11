
let Dish=require("../mongo_operations/models/CustomerModel")

async function handle_request(cust, callback){
    console.log("request received to update dish")
    Dish.updateOne({email:cust.email},{address:cust.address,zipcode:cust.zipcode,contact:cust.contact},async (err,result)=>{
           console.log("successfully updated the dish")
           if (err){
               callback(err,"Error");
           }
           return true
              
           
       })
       
    
        
   
}

exports.handle_request = handle_request;