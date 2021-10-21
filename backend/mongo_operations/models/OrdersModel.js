import React from 'react'
var mongoose=require("mongoose")
const Schema= mongoose.Schema
const OrdersModel = new Schema ({
    id:{type:Number,required:true},
    customer_email:{type:String,required:true},
    restaurant_name:{type:String,required:true},
    restaurant_zipcode:{type:String,required:true},
    amount:{type:Number,required:true},
    order_date:{type:Date,required:true},
    delivery_address:{type:String,required:true}

     
})
const ordersmodel = mongoose.model('ordersmodel',OrdersModel)
module.exports=OrdersModel;