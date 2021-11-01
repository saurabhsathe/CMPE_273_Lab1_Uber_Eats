let Orders=require("../mongo_operations/models/OrdersModel")

async function handle_request(resto, callback){
    console.log("request received")
    Orders.find({restaurant_name:resto.restaurant_name,restaurant_zipcode:resto.zipcode,order_status:{"$in":status_list}},async (err,result)=>{
       
        if (err){
            callback(err,"Error");
        }
        else
        {
            callback(null,result);
        } 
    })
    
        
   
}

exports.handle_request = handle_request;