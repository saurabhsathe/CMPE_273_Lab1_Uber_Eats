
var mongoose=require("mongoose")
const Schema= mongoose.Schema
let counter = 1;
let CountedId = {type: Number, default: () => counter++}


const DishesModel = new Schema ({
    id:CountedId,
    dish_name:{type:String,required:true},
    resteraunt_name:{type:String,required:true},
    zipcode:{type:String,required:true},
    dish_desc:{type:String,required:true},
    dishdp:{type:String,required:true},
    price:{type:Number,required:true}
})
const dishesmodel = mongoose.model('dish',DishesModel)

module.exports=dishesmodel;