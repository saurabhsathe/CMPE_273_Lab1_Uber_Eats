const {createPool} = require("mysql2")

const get_connection_user = () => { return new Promise((resolve,reject)=>{
    const pool=createPool({

        host:"myubereatsdb.c9uvql1ff7ga.us-east-2.rds.amazonaws.com",
        port:3306,
        user:"admin",
        password:"saurabh123",
        database:"ubereatsdb",
        connectionLimit:1000
        })
    
    if(pool){
        return resolve(pool)
    }
    return reject("could not create a pool")
    
    
})



}

module.exports={get_connection_user};