
let Customer=require("../mongo_operations/models/CustomerModel")

async function handle_request(cust, callback){
    console.log("request received to update customer---------->",cust)
    Customer.updateOne({_id:cust._id},{address:cust.address,zipcode:cust.zipcode,contact:cust.contact,city:cust.city},async (err,result)=>{
           console.log("successfully updated the customer details",result)
           if (err){
               console.log("hereeeeeeeeeeeeeeeeeee-> in error")
            callback(err,"Error");
           }
           callback(true,null);
              
           
       })
       
    
        
   
}

exports.handle_request = handle_request;