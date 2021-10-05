const database=require('./database')
const getowner = (conn_pool,owner_email)=>{return new Promise((resolve, reject)=>{
    x=conn_pool.query(`select resteraunt_name,zipcode from restaurant where owner_email="${owner_email}";`,  (error, results)=>{
    console.log("rows affected",x._rows[0].length,x._rows)   
        if(error){
            console.log(error)
            reject(error);
        }
        if(x._rows[0].length>0){
            
            resolve(x._rows[0]);
        }
        else{
            resolve(null)
        }
        
    });
});
} 

async function get_owner (owner_email) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await getowner(conn_pool,owner_email)
        console.log(ins_res)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function getown(owner_email){
    console.log(`select resteraunt_name,zipcode from restaurant where owner_email=${owner_email};`)
    let x= await get_owner(owner_email)
    return x[0]
    

    
}

module.exports ={getown}