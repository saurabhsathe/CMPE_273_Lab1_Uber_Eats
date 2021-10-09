const database=require('./database')
const get_address = (conn_pool,cust_email)=>{return new Promise((resolve, reject)=>{
   console.log(`select * from customer where email="${cust_email}";`)
    x=conn_pool.query(`select * from customer where email="${cust_email}";`,  (error, results)=>{
    //console.log("rows affected",x._rows.length,x._rows)   
      
    if(error){
            reject(false);
        }
        if(x._rows.length>0){
            resolve(x._rows);
        }
        else{
            resolve(false)
        }
        
    });
});
} 

async function get_cust_address (cust_email) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await get_address(conn_pool,cust_email)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function getcust_address(cust_email){
    let x= await get_cust_address(cust_email)
    
    return x
    

    
}

module.exports ={getcust_address}