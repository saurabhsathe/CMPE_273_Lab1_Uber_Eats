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

        host:"10.0.0.72",
        port:3306,
        user:"saurabh",
        password:"Saurabh@123",
        database:"userdb",
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