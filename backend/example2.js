const database = require("./example")

async function insert_user (person_details,owner_type) {
    let pwd
    
    try{
        const conn_pool=await database.get_connection_user()
        console.log(conn_pool)
        return conn_pool;
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertuser(person_details,owner_type){
    try{

        await insert_user(person_details,owner_type)
        return true
    }
    catch(error){
        return false
    }
    

    
}

async function normalfun(){
 console.log(await insertuser({},"customer").then(resp=>{
    console.log("hero")   
    return "done"
   
 }))
}
normalfun()