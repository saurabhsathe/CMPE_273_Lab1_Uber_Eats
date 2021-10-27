
var mongoose=require("mongoose")
const Schema= mongoose.Schema



const OrdersModel = new Schema ({
    
    customer_email:{type:String,required:true},
    restaurant_name:{type:String,required:true},
    restaurant_zipcode:{type:String,required:true},
    amount:{type:Number,required:true},
    order_date:{type: Date, default: Date.now},
    order_status:{type:String,required:true},
    delivery_address:{type:String,required:true}

     
})
const ordersmodel = mongoose.model('order',OrdersModel)
module.exports=ordersmodel;