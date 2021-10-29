var mongoose=require("mongoose")
const Schema= mongoose.Schema
const dummyModel = new Schema ({
    email:{type:String,required:true},
    pwd:{type:String,required:true},
    
},
{
    versionKey:false
}
);

const dummymodel = mongoose.model('dummy',dummyModel)
module.exports=dummymodel;