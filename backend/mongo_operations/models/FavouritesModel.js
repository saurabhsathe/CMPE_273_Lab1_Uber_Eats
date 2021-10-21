import React from 'react'
var mongoose=require("mongoose")
const Schema= mongoose.Schema
const FavouritesModel = new Schema ({
    email:{type:String,required:true},
    resteraunt_name:{type:String,required:true},
    zipcode:{type:String,required:true},
     
})

const favouritesmodel = mongoose.model('favouritesmodel',FavouritesModel)
module.exports=favouritesmodel;