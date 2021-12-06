const axios = require('axios');
const {
    GraphQLObjectType, GraphQLFloat, GraphQLString
} = require('graphql');

const DishesType = new GraphQLObjectType({
    name:'DishesType',
    fields:{
        id:{type:GraphQLString},
    dish_name:{type:GraphQLString},
    resteraunt_name:{type:GraphQLString},
    zipcode:{type:GraphQLString},
    dish_desc:{type:GraphQLString},
    dishdp:{type:GraphQLString},
    category:{type:GraphQLString},
    price:{type:GraphQLFloat}
    }
});

module.exports=DishesType;