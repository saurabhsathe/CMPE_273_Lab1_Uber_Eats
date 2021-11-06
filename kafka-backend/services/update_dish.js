
let Dish=require("../mongo_operations/models/DishesModel")

async function handle_request(dish, callback){
    console.log("request received to update dish")
    Dish.updateOne({id:dish.id},{dish_name:dish.dish_name,dish_desc:dish.dish_desc,price:dish.price},async (err,result)=>{
           console.log("successfully updated the dish")
           if (err){
               callback(err,"Error");
           }
           return true
              
           
       })
       
    
        
   
}

exports.handle_request = handle_request;