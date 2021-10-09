

const database=require('./database')
const insert = (conn_pool,orderdetails)=>{return new Promise((resolve, reject)=>{
    console.log(`insert into orders(customer_email,restaurant_name,restaurant_zipcode,amount,order_date,order_status,delivery_address) values("${orderdetails.customer_email}","${orderdetails.restaurant_name}","${orderdetails.restaurant_zipcode}","${orderdetails.amount}",CURDATE(),"placed","${orderdetails.delivery_address}"`)
    conn_pool.query(`insert into orders(customer_email,restaurant_name,restaurant_zipcode,amount,order_date,order_status,delivery_address) values("${orderdetails.customer_email}","${orderdetails.restaurant_name}","${orderdetails.restaurant_zipcode}","${orderdetails.amount}",CURDATE(),"placed","${orderdetails.delivery_address}");`,  (error, results)=>{
        if(error){
            
            return reject(false);
        }
        return resolve(true);
    });
});
} 

async function insert_order (order_details) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool,order_details)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
        console.log(ins_res)
        return ins_res;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertorder(order_details){
    try{

        return await insert_order(order_details)
        
    }
    catch(error){
        console.log("error atthe bottom",error)
        return false
    }
    

    
}
module.exports={insertorder}

