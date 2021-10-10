const database=require('./database')
//insert into dishes(customer_id,statusaurant_name,restaurant_zipcode,amount,order_date,order_status,delivery_addrees) values ();
const updatedishes = (conn_pool,dish)=>{return new Promise((resolve, reject)=>{
    //console.log(`select * from dishes where customer_id status{resto_name}"and zipcode ="${zipcode}";`)
    console.log("hree2")
    try{
    console.log(`update dishes set dish_name="${dish.dish_name}",dish_desc="${dish.dish_desc}",price=${dish.price} where id=${dish.id};`)
    x=conn_pool.query(`update dishes set dish_name="${dish.dish_name}",dish_desc="${dish.dish_desc}",price=${dish.price} where id=${dish.id};`,  (error, results)=>{
    //console.log("rows affected",x._rows.length,x._rows)   
        if(error){
            reject(false);
        }
        else{
            resolve(true)
        }
        
    });
}
catch(error){
    console.log(error)
}
});
} 

async function update_dishes (dish) {
    let pwd
    
    try{
        console.log("here1")
        const conn_pool=await database.get_connection_user()
        const ins_res=await updatedishes(conn_pool,dish)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function update_dish(dish){
    let x= await update_dishes(dish)
    
    return x
    

    
}

module.exports ={update_dish}