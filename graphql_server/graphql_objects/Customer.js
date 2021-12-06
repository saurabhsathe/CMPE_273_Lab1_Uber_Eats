const axios = require('axios');
const {
    GraphQLObjectType, GraphQLString,
} = require('graphql');

const CustomerType = new GraphQLObjectType({
    name:'CustomerType',
    fields:{
        email:{type:GraphQLString},
        fullname:{type:GraphQLString},
        address:{type:GraphQLString},
        zipcode:{type:GraphQLString},
        contact:{type:GraphQLString},
        pwd:{type:GraphQLString},
        userdp:{type:GraphQLString},
        city:{type:GraphQLString}
    }
});

module.exports=CustomerType;