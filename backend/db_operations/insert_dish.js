

const database=require('./database')
const insert = (conn_pool,dishdetails)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`insert into dishes(dish_name,resteraunt_name,zipcode,dish_desc,dishdp) values("${dishdetails.dish_name}","${dishdetails.resteraunt_name}","${dishdetails.zipcode}","${dishdetails.dish_desc}","${dishdetails.dishdp}")`,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
});
} 

async function insert_dish (dish_details) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool,dish_details)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        console.log(ins_res)
        return ins_res;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertdish(dish_details){
    try{

        await insert_dish(dish_details)
        return true
    }
    catch(error){
        return false
    }
    

    
}
module.exports={insertdish}

