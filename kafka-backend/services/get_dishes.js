
let Dishes=require("../mongo_operations/models/DishesModel")

async function handle_request(resto, callback){
    console.log("request received")
    Dishes.find({resteraunt_name:resto.resteraunt_name,zipcode:resto.zipcode},async (err,result)=>{
       
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