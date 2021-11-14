
let Orders=require("../mongo_operations/models/OrdersModel")

async function handle_request(resto, callback){
    console.log("request received",resto)
    let status_list=[]
        if(resto.order_type=="new"){
            status_list=["placed","received"]
        }
        else if(resto.order_type=="all"){
            status_list=["received","placed","preparing","on the way","ready","pickedup","cancelled"]
        }
        else if(resto.order_type=="ongoing"){
            status_list=["received","preparing","on the way","ready"]
        }
        else{
            status_list=["delivered","pickedup","cancelled"]
        }
        console.log(status_list)
    Orders.find({customer_email:resto.email,order_status:{"$in":status_list}},async (err,result)=>{
       
        if (err){
            console.log("faced an error",err)
            callback(err,"Error");
        }
        else
        {
            console.log("executed well",result)
            callback(null,result);
        } 
    })
    
        
   
}

exports.handle_request = handle_request;