
let Orders=require("../mongo_operations/models/OrdersModel")

async function handle_request(order, callback){
    console.log("request received to place an order")
    order=new Orders(order)
    order.save((err,data)=>{
        if (err){
            console.log(err)
            callback(err,"Error");
        }
        
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;