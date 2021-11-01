let Orders=require("../mongo_operations/models/OrdersModel")

     async function handle_request(order, callback){
         console.log("request received to update order")
         Orders.updateOne({_id:order.id},{order_status:order.status},async (err,result)=>{
            console.log(result)
            if (err){
                callback(err,"Error");
            }
            
                callback(null,result);
            
        })
        
             
         
             
        
     }
     
     exports.handle_request = handle_request;