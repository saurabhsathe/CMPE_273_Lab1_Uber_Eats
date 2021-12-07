
var mongoose=require("mongoose")
const Schema= mongoose.Schema
const RestaurantOwnerModel = new Schema ({
    email:{type:String,required:true},
    fullname:{type:String,required:true},
    address:{type:String,required:true},
    zipcode:{type:String,required:true},
    contact:{type:String,required:true},
    upassword:{type:String,required:true},
    userdp:{type:String,required:true},
})

const resto_owner_model = mongoose.model('RestoOwner',RestaurantOwnerModel)
module.exports=resto_owner_model;
