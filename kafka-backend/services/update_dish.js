
let Dish=require("../mongo_operations/models/DishesModel")

async function handle_request(dish, callback){
    console.log("request received to add dish")
    console.log(dish)
    dish = new Dish(dish)
    dish.save((err,data)=>{
        if (err){
            callback(err,"Error");
        }
        
            callback(null,data);
        
    })
    
        
   
}

exports.handle_request = handle_request;