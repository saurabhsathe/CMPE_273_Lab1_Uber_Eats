const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const RestaurantsModel = require('./models/RestaurantsModel')
const DishesModel = require('./models/DishesModel')




const CustomerType=require( './graphql_objects/Customer')
const DishesType = require ('./graphql_objects/Dishes')
const FavouritesType = require ( './graphql_objects/Favourites')
const OrderType = require('./graphql_objects/Order')
const OwnerType = require('./graphql_objects/Owner');
const RestaurantType = require('./graphql_objects/Resto')



const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        dishes:{
            type:new GraphQLList(DishesType),
            args:{
                resteraunt_name:{type:GraphQLString},
                zipcode:{type:GraphQLString}

            },
             resolve(parentValue, args){
                console.log("got a request to send dishes",args)
                const results =DishesModel.find({resteraunt_name:args.resteraunt_name,zipcode:args.zipcode})
               
                return results
            }
        },
        restaurants:{
            type:new GraphQLList(RestaurantType),
            args:{

            },
            resolve(parentValue, args){
                console.log("request received to get the restaurants")
                const users = RestaurantsModel.find({});
                return users
            }
        },
        get_favourites:{
            type:new GraphQLList(RestaurantType),
            args:{
                user_id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('')
                    .then(res => res.data);
            }

        },
        get_cust_details:{
            type:CustomerType,
            args:{
                user_id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('')
                    .then(res => res.data);
            }
        },
        get_cust_orders:{
            type:new GraphQLList(OrderType),
            args:{
                user_id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('')
                    .then(res => res.data);
            }
        },
        get_resto_oders:{
            type:new GraphQLList(OrderType),
            args:{
                resto_id:{type:GraphQLString}
            },

            resolve(parentValue, args){
                return axios.get('')
                    .then(res => res.data);
            }
        },







    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        customer_login:{
            type:CustomerType,
            resolve(parentValue, args){
                return axios.post('',args)
                .then(res => res.data);
            }
        },
        resto_login:{
            type:OwnerType,

            resolve(parentValue, args){
                return axios.post('',args)
                .then(res => res.data);
            }
        },
        add_favourite:{
            type:RestaurantType,
            resolve(parentValue, args){
                return axios.post('',args)
                .then(res => res.data);
            }
        },
        place_order:{
            type:OrderType,
            resolve(parentValue, args){
                return axios.post('',args)
                .then(res => res.data);
            }
        },
        update_order:{
            type:OrderType,
            resolve(parentValue, args){
                return axios.post('',args)
                .then(res => res.data);
            }
        },
        update_cust:{
            type:CustomerType,
            resolve(parentValue, args){
                return axios.post('',args)
                .then(res => res.data);
            }
        },
        insert_cust:{
            type:CustomerType,
            resolve(parentValue, args){
                return []
            }
        }


        



    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});