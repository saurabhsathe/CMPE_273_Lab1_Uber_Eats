const {createPool} = require("mysql2")
const pool=createPool({

    host:"10.0.0.72",
    port:3306,
    user:"saurabh",
    password:"Saurabh@123",
    database:"test1",
    connectionLimit:1000
    }
)
pool.query("select * from student_table;",(err,result,fields)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
});
