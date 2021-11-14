
let Resto=require("../mongo_operations/models/RestaurantsModel")

async function handle_request(resto, callback){
    console.log("request received to register restaurant")
    resto=Resto(resto)
    resto.save((err,data)=>{
        if (err){
            console.log("faced an error",err)
            callback(err,"Error");
        }
            console.log("done")
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;