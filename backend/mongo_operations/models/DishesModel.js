import React from 'react'
var mongoose=require("mongoose")
const Schema= mongoose.Schema
const DishesModel = new Schema ({
    id:{type:Number,required:true},
    dish_name:{type:String,required:true},
    resteraunt_name:{type:String,required:true},
    zipcode:{type:String,required:true},
    dish_desc:{type:String,required:true},
    dishdp:{type:String,required:true},
    price:{type:Number,required:true},
    diet_type:{type:String,required:true} 
})

const dishesmodel = mongoose.model('dishesmodel',DishesModel)
module.exports=dishesmodel;