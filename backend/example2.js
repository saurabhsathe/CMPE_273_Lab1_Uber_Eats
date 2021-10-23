const database = require("./example")
 
async function insert_user () {
    let pwd
    
    try{
        return new Promise((resolve, reject)=>{
            const pool = database.get_connection_user()
            if (pool!=false){
                return resolve(pool)
            }
            else{
                return reject(pool)
            }
        });
        
    }
    catch(e){
        console.log(e)
        
    }

 
    
    
}

async function insertuser(){
    try{

        await insert_user()
        return true
    }
    catch(error){
        return false
    }
    

    
}

module.exports={insertuser}
