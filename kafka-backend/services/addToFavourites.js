
let Favourites=require("../mongo_operations/models/FavouritesModel")

async function handle_request(hotel, callback){
    console.log("request received to add as a favourites")
    hotel = new Favourites(hotel)
    console.log(hotel)
    hotel.save((err,data)=>{
        if (err){
            console.log(err)
            callback(err,"Error");
        }
        
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;