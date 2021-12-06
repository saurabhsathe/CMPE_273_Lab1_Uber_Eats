const axios = require('axios');
const {
    GraphQLObjectType, GraphQLString, GraphQLFloat,
   
} = require('graphql');

const OwnerType = new GraphQLObjectType({
    name:'OwnerType',
    fields:{
        email:{type:GraphQLString},
        fullname:{type:GraphQLString},
        address:{type:GraphQLString},
        zipcode:{type:GraphQLString},
        contact:{type:GraphQLString},
        pwd:{type:GraphQLString},
        userdp:{type:GraphQLString},
    }
});

module.exports=OwnerType;