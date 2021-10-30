
let Resto=require("../mongo_operations/models/RestaurantsModel")

async function handle_request(resto, callback){
    console.log("request received")

    resto = new Resto(resto)
    resto.save((err,data)=>{
        if (err){
            callback(err,"Error");
        }
        
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;