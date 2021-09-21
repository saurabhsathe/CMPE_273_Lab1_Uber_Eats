

const database=require('./database')
const insert = (conn_pool)=>{return new Promise((resolve, reject)=>{
    conn_pool.query('select * from userdb;',  (error, results)=>{
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

async function getresult(){
    let x= await insert_user()
    console.log(x[0])
    

    
}
getresult()



