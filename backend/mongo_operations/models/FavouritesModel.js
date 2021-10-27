
var mongoose=require("mongoose")
const Schema= mongoose.Schema
const FavouritesModel = new Schema ({
    email:{type:String,required:true},
    resteraunt_name:{type:String,required:true},
    restdp:{type:String,required:true,default:""},
    zipcode:{type:String,required:true},
     
})

const favouritesmodel = mongoose.model('favourite',FavouritesModel)
module.exports=favouritesmodel;