

const database=require('./database')
const verify = (conn_pool,uemail,upwd,usertype)=>{return new Promise((resolve, reject)=>{
    x=conn_pool.query(`select * from ${usertype} where email="${uemail}" and pwd="${upwd}";`,  (error, results)=>{
        if(x==null){
            return reject(false)
        }
        if(x._rows[0].length==0){
            return reject(false);
        }
        return resolve(true);
    });
});
} 


async function verify_user (uname,upwd,usertype) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        const ins_res=await verify(conn_pool,uname,upwd,usertype)
        conn_pool.end()
        return ins_res;
        
    }
    catch(e){
        console.log(e)
    }

 
    
    
}

async function auth_user(uname,upwd,usertype){
        return await verify_user(uname,upwd,usertype)
}


module.exports={auth_user};



