const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql_server/schemadef');
const resolvers = require('./graphql_server/resolvers');

var options={
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    maxpoolSize:500,
    
}
var {mongo_connection_string} = require('./mongo_operations/mongo_connection')
const mongo=require("mongoose")


const PORT = process.env.port || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const RestaurantsModel = require('./models/RestaurantsModel')

mongo.connect(mongo_connection_string,options)
  .then(async () => {
     console.log('MongoDB Connected');
     //const users = await RestaurantsModel.find({});
     //console.log(users)
     return server.listen({ port: PORT });
   })
   .then((res) => {
          console.log(`Server running at ${res.url}`);
   })
   .catch(err => {
     console.error(err)
   })

  
