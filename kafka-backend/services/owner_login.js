
let Customer=require("../mongo_operations/models/CustomerModel")

async function handle_request(user, callback){
    var res = {};
   
    console.log("In handle request:"+ JSON.stringify(user));
    
    console.log({email:user.email,pwd:user.password})
    try{
    await Customer.findOne({email:user.email,pwd:user.password},async (err,dummy)=>{
        console.log("result is",dummy)
        if (err){
            callback(err,"Error");
        }
      
        if(dummy){
            callback(null,dummy);
        }
        else{
            callback(null,[]);
        }
    })
}
catch(err){
    console.log(err)
}
   
}

exports.handle_request = handle_request;