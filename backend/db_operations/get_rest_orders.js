const database=require('./database')
const getorders = (conn_pool)=>{return new Promise((resolve, reject)=>{
    //console.log(`select * from orders where resteraunt_name = "${resto_name}"and zipcode ="${zipcode}";`)
    x=conn_pool.query(`select * from orders;`,  (error, results)=>{
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

async function get_orders () {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await getorders(conn_pool)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function getorders_resto(){
    let x= await get_orders()
    
    return x
    

    
}

module.exports ={getorders}