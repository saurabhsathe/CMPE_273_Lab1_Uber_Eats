const database=require('./database')
const test = (conn_pool,email,owner_type)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`select * from ${owner_type} where email="${email}" `,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
});
} 

async function test_email (email,owner_type) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await test(conn_pool,email,owner_type)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        if (ins_res.length < 1) {
            return false
        }
          return true;
        
    }
    catch(e){
        console.log(e)
    }

 
    
    
}

async function testemail(email,owner_type){
    let x= await test_email(email,owner_type)
    return x
    

    
}
module.exports={testemail}

