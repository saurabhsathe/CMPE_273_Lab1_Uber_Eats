let Orders=require("../mongo_operations/models/OrdersModel")

async function handle_request(resto, callback){
    console.log("request received")
    let status_list=[]
    
    if(resto.order_type=="new"){
        status_list=["placed"]
    }
    else if(resto.order_type=="all"){
        status_list=["received","placed","preparing","on the way","ready","pickedup","cancelled"]
    }
    else if(resto.order_type=="ongoing"){
        status_list=["received","placed","preparing","on the way","ready"]
    }
    else{
        status_list=["delivered","pickedup","cancelled"]
    }
    console.log("here is the order type----------------->",resto.order_type)
    
    console.log("here is the status list----------------->",status_list)
    Orders.find({restaurant_name:resto.restaurant_name,restaurant_zipcode:resto.zipcode,order_status:{"$in":status_list}},async (err,result)=>{
       
        if (err){
            callback(err,"Error");
        }
        else
        {
            console.log(result)
            callback(null,result);
        } 
    })
    
        
   
}

exports.handle_request = handle_request;