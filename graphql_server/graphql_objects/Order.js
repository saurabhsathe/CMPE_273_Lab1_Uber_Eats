const axios = require('axios');
const {
    GraphQLObjectType, GraphQLString, GraphQLFloat,
   
} = require('graphql');

const OrderType = new GraphQLObjectType({
    name:'OrderType',
    fields:{
        customer_email:{type:GraphQLString},
        restaurant_name:{type:GraphQLString},
        restaurant_zipcode:{type:GraphQLString},
        amount:{type:GraphQLFloat},
        order_date:{type: GraphQLString},
        order_status:{type:GraphQLString},
        delivery_address:{type:GraphQLString},
        instructions:{type:GraphQLString}
    }
});

module.exports=OrderType;