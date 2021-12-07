const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema.js');
const cors = require('cors');
const multer = require('multer')
var options={
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    maxpoolSize:500,
    
}
var {mongo_connection_string} = require('./mongo_operations/mongo_connection')
const mongo=require("mongoose")
var mongodb=mongo.connect(mongo_connection_string,options)
const app = express();

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
})

);
app.use(multer({
    storage: multer.memoryStorage(),
}).any());
app.listen(4000, () => {
    console.log('Server is running on port 4000..');
});