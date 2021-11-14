
let Favourites=require("../mongo_operations/models/FavouritesModel")

async function handle_request(resto, callback){
    console.log("request received  to get favourites-------------->",resto)
    Favourites.find({email:resto.email},async (err,result)=>{
       
        if (err){
            console.log(err)
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