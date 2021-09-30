const fs=require("fs")
const aws=require("aws-sdk")
const s3 = require("./aws_handler/aws_credential_store") 

const upload = (params)=>{
    return new Promise((resolve,reject)=>{
        s3.getS3().upload(params, function(err, data) {
            if (err) {
                return reject(error)
            }
            
            return resolve(data.Location)
        });
    })
}
async function s3upload(fileloc,bucketname,filename){
    const file=fs.readFileSync(fileloc)
    const params = {
        Bucket: bucketname,
        Key: filename, // File name you want to save as in S3
        Body: file
    };
    return await upload(params)
    
    
}
async function upload_to_s3(fileloc,bucketname,filename){
    try{

        const x = await s3upload(fileloc,bucketname,filename)
        return x
    }
    catch(error){
        return null
    }
}
module.exports ={upload_to_s3}