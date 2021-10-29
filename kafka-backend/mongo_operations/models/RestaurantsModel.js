var mongoose=require("mongoose")
const Schema= mongoose.Schema
const RestaurantsModel = new Schema ({
    resteraunt_name:{type:String,required:true},
    address:{type:String,required:true},
    zipcode:{type:String,required:true},
    restdp:{type:String,required:true},
    contact:{type:String,required:true},
    owner_email:{type:String,required:true},
    pickup_drop:{type:String,required:true},
    diet:{type:String,required:true},
    city:{type:String,required:true},
    restdesc:{type:String,required:true}
})

const restomodel = mongoose.model('Restaurant',RestaurantsModel)
module.exports=restomodel;