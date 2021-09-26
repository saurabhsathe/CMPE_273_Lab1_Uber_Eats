

const database=require('./database')
const verify = (conn_pool,uemail,upwd)=>{return new Promise((resolve, reject)=>{
    conn_pool.query(`select * from customer where email="${uemail}" and pwd="${upwd}";`,  (error, results)=>{
        if(error){
            return reject(error);
        }
        return resolve(results);
    });
});
} 

async function insert_user () {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await insert(conn_pool)
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

async function verify_user (uname,upwd) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await verify(conn_pool,uname,upwd)
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



async function authenticate_user(){
    let x= await verify_user()
    console.log(x[0])
    

    
}
module.exports={authenticate_user};



