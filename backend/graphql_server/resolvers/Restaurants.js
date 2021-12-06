"use strict";
var options={
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    maxpoolSize:500,
    
}
var {mongo_connection_string} = require('../../mongo_operations/mongo_connection')
const mongo=require("mongoose")


const RestaurantsModel = require('../../models/RestaurantsModel')
mongo.connect(mongo_connection_string,options)
  .then(async () => {
     console.log('MongoDB Connected2');
     console.log(users)
     return server.listen({ port: PORT });
   })
   .then((res) => {
          console.log(`Server running at ${res.url}`);
   })
   .catch(err => {
     console.error(err)
   })

  

const restoResolvers = {
  Query: {
    async getRestos() {
      try {
          console.log("hereeeeeeeeeeeeeeeeeeeeeee")
        const users = await RestaurantsModel.find({});
        return users;
      } catch (err) {
        console.log(err);
      }
    }
  }
    

};

module.exports = restoResolvers;
