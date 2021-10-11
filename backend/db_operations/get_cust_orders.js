const database=require('./database')
//insert into orders(customer_email,restaurant_name,restaurant_zipcode,amount,order_date,order_status,delivery_addrees) values ();
const getorders = (conn_pool,email,type)=>{return new Promise((resolve, reject)=>{
    //console.log(`select * from orders where customer_email = "${resto_name}"and zipcode ="${zipcode}";`)
    let query_str
    if (type=="current"){
        query_str=`select * from orders where customer_email="${email}" and (order_status="placed" or order_status="preparing");`
    }
    else{
        query_str=`select * from orders where customer_email="${email}" and (order_status="delivered" or order_status="cancelled");`    
    }
    x=conn_pool.query(query_str,  (error, results)=>{
    //console.log("rows affected",x._rows.length,x._rows)   
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

async function get_orders (email,type) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await getorders(conn_pool,email,type)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function getorders_cust(email,type){
    let x= await get_orders(email,type)
    
    return x
    

    
}

module.exports ={getorders_cust}