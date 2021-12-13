const AWS = require('aws-sdk');
function getS3(){
    return new AWS.S3({
  accessKeyId: '',
  secretAccessKey: ''
});
}
module.exports={getS3}
