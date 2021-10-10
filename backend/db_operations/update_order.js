const database=require('./database')
//insert into orders(customer_id,statusaurant_name,restaurant_zipcode,amount,order_date,order_status,delivery_addrees) values ();
const updateorders = (conn_pool,id,status)=>{return new Promise((resolve, reject)=>{
    //console.log(`select * from orders where customer_id status{resto_name}"and zipcode ="${zipcode}";`)
    query_str=`update orders set order_status="${status}" where id="${id}"`;
    x=conn_pool.query(query_str,  (error, results)=>{
    //console.log("rows affected",x._rows.length,x._rows)   
        if(error){
            reject(false);
        }
        else{
            resolve(true)
        }
        
    });
});
} 

async function update_orders (id,status) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await updateorders(conn_pool,id,status)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function update_order_status(id,status){
    let x= await update_orders(id,status)
    
    return x
    

    
}

module.exports ={update_order_status}