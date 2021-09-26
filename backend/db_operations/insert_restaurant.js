
const database=require('./database')
const insert_restaurant = (conn_pool,restaurant_details)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`insert into restaurant(resteraunt_name,address,zipcode,restdp) values(${restaurant_details[rname]},${restaurant_details[raddr]},${restaurant_details[rzip]},${restaurant_details[rdp]})`,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
});
} 

async function insert_restaurant (restaurant_details) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool,restaurant_details)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        if (ins_res.length < 1) {
            throw new Error('Post with this id was not found');
        }
          return ins_res;
        
    }
    catch(e){
        console.log(e)
    }

 
    
    
}

async function insertrestaurant(restaurant_details){
    let x= await insert_user(restaurant_details)
    

    
}
module.exports={insertrestaurant}



