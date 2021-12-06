const axios = require('axios');
const {
    GraphQLObjectType, GraphQLString, GraphQLFloat,
   
} = require('graphql');

const RestaurantType = new GraphQLObjectType({
    name:'RestaurantType',
    fields:{
        resteraunt_name:{type:GraphQLString},
        address:{type:GraphQLString},
        zipcode:{type:GraphQLString},
        restdp:{type:GraphQLString},
        contact:{type:GraphQLString},
        owner_email:{type:GraphQLString},
        pickup_drop:{type:GraphQLString},
        diet:{type:GraphQLString},
        city:{type:GraphQLString},
        restdesc:{type:GraphQLString}
    }
});

module.exports=RestaurantType;