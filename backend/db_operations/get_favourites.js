

const database=require('./database')
const get = (conn_pool,favourite_details)=>{return new Promise((resolve, reject)=>{
    x=conn_pool.query(`select f.email,f.resteraunt_name,f.zipcode,r.restdp,r.address from favourites f inner join restaurant r on r.resteraunt_name=f.resteraunt_name and r.zipcode=f.zipcode where f.email ="${favourite_details}";`,  (error, results)=>{
    console.log(x)   
    if(error){
            console.log(error)
            reject(false);
        }
        if(x._rows.length>0){
            console.log("found")
            resolve(x._rows);
        }
        else{
            console.log("idk why")
            resolve(false)
        }
    
    });
});
} 

async function get_favourite_ (favourite_details) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await get(conn_pool,favourite_details)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        console.log(ins_res)
        return ins_res;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function getfavourite(favourite_details){
    try{

        return await get_favourite_(favourite_details)
        
    }
    catch(error){
        console.log("error atthe bottom",error)
        return false
    }
    

    
}
module.exports={getfavourite}

