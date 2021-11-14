
let Dish=require("../mongo_operations/models/DishesModel")

async function handle_request(dish, callback){
    console.log("request received to add dish")
    dish = new Dish({dish_name:dish.dish_name,resteraunt_name:dish.resteraunt_name,zipcode:dish.zipcode,dish_desc:dish.dish_desc,dishdp:dish.dishdp,category:dish.category,price:dish.price})
    dish.id = dish._id
    console.log(dish)
    dish.save((err,data)=>{
        if (err){
            console.log("faced an error",err)
            callback(err,"Error");
        }
        else{
        console.log("proceeded without an error")
            callback(null,data);
        }
    })
    
        
   
}

exports.handle_request = handle_request;