const database=require('./database')
const test = (conn_pool,email,owner_type)=>{return new Promise((resolve, reject)=>{
    x=conn_pool.query(`select * from ${owner_type} where email="${email}" `,  (error, results)=>{
    console.log("rows affected",x._rows[0].length)   
        if(error){
            console.log(error)
            reject(error);
        }
        if(x._rows[0].length>0){
            
            resolve(true);
        }
        else{
            resolve(false)
        }
        
    });
});
} 

async function test_email (email,owner_type) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await test(conn_pool,email,owner_type)
        console.log(ins_res)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function testemail(email,owner_type){
    console.log(`select * from ${owner_type} where email="${email}" `)
    let x= await test_email(email,owner_type)
    console.log("here1")
    return x
    

    
}
module.exports={testemail}