const database=require('./database')
const test = (conn_pool,resto_name,resto_zip)=>{return new Promise((resolve, reject)=>{
    x=conn_pool.query(`select * from restaurant where resteraunt_name="${resto_name}" and zipcode="${resto_zip}" `,  (error, results)=>{
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

async function test_resto (resto_name,resto_zip) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await test(conn_pool,resto_name,resto_zip)
        console.log(ins_res)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function testresto(resto_name,resto_zip){
    console.log("here in the testresto",resto_name,resto_zip)
    let x= await test_resto(resto_name,resto_zip)
    console.log("finished completing test resto")
    return x
    

    
}
module.exports={testresto}