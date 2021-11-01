
let Favourites=require("../mongo_operations/models/FavouritesModel")

async function handle_request(resto, callback){
    console.log("request received")
    Favourites.find({email:resto.email},async (err,result)=>{
       
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