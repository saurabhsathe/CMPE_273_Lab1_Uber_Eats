

const database=require('./database')
const insert = (conn_pool,restodetails)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`insert into restaurant values("${restodetails.fullname}","${restodetails.address}","${restodetails.zipcode}","${restodetails.restdp}","${restodetails.owner_email}")`,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
});
} 

async function insert_resto (resto_details) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool,resto_details)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        console.log(ins_res)
        return ins_res;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertresto(resto_details){
    try{

        await insert_resto(resto_details)
        return true
    }
    catch(error){
        return false
    }
    

    
}
module.exports={insertresto}

