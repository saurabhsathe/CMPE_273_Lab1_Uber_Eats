var mongoose=require("mongoose")
const Schema= mongoose.Schema
const CustomerModel = new Schema ({
    email:{type:String,required:true},
    fullname:{type:String,required:true},
    address:{type:String,required:true},
    zipcode:{type:String,required:true},
    contact:{type:String,required:true},
    pwd:{type:String,required:true},
    userdp:{type:String,required:true},
},
{
    versionKey:false
}
);

const customermodel = mongoose.model('customer',CustomerModel)
module.exports=customermodel;