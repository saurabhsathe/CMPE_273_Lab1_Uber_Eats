
let Restaurants=require("../mongo_operations/models/RestaurantsModel")

async function handle_request(resto, callback){
    console.log("request received")
    Restaurants.find({},async (err,result)=>{
       
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