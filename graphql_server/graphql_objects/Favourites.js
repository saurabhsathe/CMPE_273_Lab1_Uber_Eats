const axios = require('axios');
const {
    GraphQLObjectType, GraphQLString,
} = require('graphql');

const FavouritesType = new GraphQLObjectType({
    name:'FavouritesType',
    fields:{

        email:{type:GraphQLString},
        resteraunt_name:{type:GraphQLString},
        restdp:{type:GraphQLString},
        zipcode:{type:GraphQLString},

   }
});

module.exports=FavouritesType;