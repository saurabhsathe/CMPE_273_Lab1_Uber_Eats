const database=require('./database')
//insert into orders(customer_name,restaurant_name,restaurant_zipcode,amount,order_date,order_status,delivery_addrees) values ();
const getorders = (conn_pool,name,zipcode,type)=>{return new Promise((resolve, reject)=>{
    //console.log(`select * from orders where customer_name = "${resto_name}"and zipcode ="${zipcode}";`)
    let query_str
    if (type=="current"){
        query_str=`select * from orders where restaurant_name="${name}" and restaurant_zipcode="${zipcode}" and (order_status="placed" or order_status="confirm");`
    }
    else{
        query_str=`select * from orders where restaurant_name="${name}" and restaurant_zipcode="${zipcode}" and (order_status="cancel" or order_status="delivered");`    
    }
    console.log(query_str)
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

async function get_orders (name,zipcode,type) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await getorders(conn_pool,name,zipcode,type)
        //let ins_res=await Promise.all(promises)
        conn_pool.end()
       return ins_res
        
    }
    catch(e){
        return false
    }

 
    
    
}

async function getorders_resto(name,zipcode,type){
    let x= await get_orders(name,zipcode,type)
    
    return x
    

    
}

module.exports ={getorders_resto}