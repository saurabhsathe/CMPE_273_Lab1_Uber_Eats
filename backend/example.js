const mongo=require("mongoose")
const {mongo_connection_string} = require('./mongo_operations/mongo_connection')



const get_connection_user = () => { return new Promise((resolve,reject)=>{
    var options={
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        maxpoolSize:500,
        
    }
   
    const pool=mongo.connect(mongo_connection_string,options)
    console.log(pool)
    if(pool){
        return resolve(pool)
    }
    return reject("could not create a pool")
    
    
})



}
module.exports={get_connection_user};
