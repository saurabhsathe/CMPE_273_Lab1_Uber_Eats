

const database=require('./database')
const insert = (conn_pool,favourite_details)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`insert into favourites values("${favourite_details.email}","${favourite_details.resteraunt_name}","${favourite_details.zipcode}");`,  (error, results)=>{
        if(error){
            
            return reject(false);
        }
        return resolve(true);
    });
});
} 

async function insert_favourite_ (favourite_details) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool,favourite_details)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        console.log(ins_res)
        return ins_res;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertfavourite(favourite_details){
    try{

        return await insert_favourite_(favourite_details)
        
    }
    catch(error){
        console.log("error atthe bottom",error)
        return false
    }
    

    
}
module.exports={insertfavourite}

