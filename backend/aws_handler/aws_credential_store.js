const AWS = require('aws-sdk');
function getS3(){
    return new AWS.S3({
  accessKeyId: 'AKIARXHLWFULHJKSQKMK',
  secretAccessKey: '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'
});
}
module.exports={getS3}