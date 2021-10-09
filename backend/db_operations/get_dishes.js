const database=require('./database')
const getdishes = (conn_pool,resto_name,zipcode)=>{return new Promise((resolve, reject)=>{
    console.log(`select * from dishes where resteraunt_name = "${resto_name}" and zipcode ="${zipcode}";`)
    x=conn_pool.query(`select * from dishes where resteraunt_name = "${resto_name}"and zipcode ="${zipcode}";`,  (error, results)=>{
    //console.log("rows affected",x._rows.length,x._rows)   
    console.log(x._rows)    
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

async function get_dishes (resto_name,zipcode) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await getdishes(conn_pool,resto_name,zipcode)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function getdishes_resto(resto_name,zipcode){
    let x= await get_dishes(resto_name,zipcode)
    
    return x
    

    
}

module.exports ={getdishes_resto}