const {createPool} = require("mysql2")
//import {insert_user} from './insert_user'
/*
const insert_user = () => {
    conn_pool=database()
    conn_pool.query("select * from student_table;",(err,result,fields)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    });
    
    
    
}*/
const get_connection_user = () => { return new Promise((resolve,reject)=>{
    const pool=createPool({

        host:"myubereatsdb.c9uvql1ff7ga.us-east-2.rds.amazonaws.com",
        port:3306,
        user:"admin",
        password:"saurabh123",
        database:"myubereatsdb",
        connectionLimit:1000
        })
    
    if(pool){
        return resolve(pool)
    }
    return reject("could not create a pool")
    
    
})

    return pool

}

module.exports={get_connection_user};