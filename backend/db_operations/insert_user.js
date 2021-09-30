

const database=require('./database')
const insert = (conn_pool,userdetails,dbname)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`insert into ${dbname} values("${userdetails.fullname}","${userdetails.address}","${userdetails.zipcode}","${userdetails.contact}","${userdetails.pwd}","${userdetails.email}","${userdetails.userdp}")`,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
});
} 

async function insert_user (person_details,owner_type) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool,person_details,owner_type)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        console.log(ins_res)
        return ins_res;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertuser(person_details,owner_type){
    try{

        await insert_user(person_details,owner_type)
        return true
    }
    catch(error){
        return false
    }
    

    
}
module.exports={insertuser}

