let Orders=require("../mongo_operations/models/OrdersModel")

async function handle_request(resto, callback){
    console.log("request received")
    let status_list=[]
        if(resto.order_type=="current"){
            status_list=["placed","preparing"]
        }
        else if(resto.order_type=="all"){
            status_list=["placed","preparing","delivered","cancelled"]
        }
        else{
            status_list=["delivered","cancelled"]
        }
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