
let RestaurantOwner=require("../mongo_operations/models/RestaurantOwnerModel")

async function handle_request(owner, callback){
    console.log("request received")

    owner = new RestaurantOwner(owner)
    owner.save((err,data)=>{
        if (err){
            callback(err,"Error");
        }
        
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;