const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const RestaurantsModel = require('./models/RestaurantsModel')
const DishesModel = require('./models/DishesModel')
const Orders = require('./models/OrdersModel')
const Customer = require('./models/CustomerModel');
const Owner = require('./models/RestaurantOwnerModel')


const CustomerType=require( './graphql_objects/Customer')
const DishesType = require ('./graphql_objects/Dishes')
const FavouritesType = require ( './graphql_objects/Favourites')
const OrderType = require('./graphql_objects/Order')
const OwnerType = require('./graphql_objects/Owner');
const RestaurantType = require('./graphql_objects/Resto');



const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        dishes:{
            type:new GraphQLList(DishesType),
            args:{
                resteraunt_name:{type:GraphQLString},
                zipcode:{type:GraphQLString}

            },
             async resolve(parentValue, args){
                console.log("got a request to get dishes for",args)
                const results =await DishesModel.find({resteraunt_name:args.resteraunt_name,zipcode:args.zipcode})
                console.log(results)
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
                email:{type:GraphQLString},
                
            },
            async resolve(parentValue, args){
              try{
                    console.log("received request to get customer details")
                    const results= await Customer.findOne({email:args.email})
                    console.log(results)
                    return results
              }
              catch(err){
                  console.log(err)
                  return null
              }  
            }
        },
        get_resto_details:{
            type:RestaurantType,
            args:{
                owner_email:{type:GraphQLString},
                
            },
            async resolve(parentValue, args){
              try{
                    console.log("received request to get restaurant details")
                    const results= await RestaurantsModel.findOne({owner_email:args.owner_email})
                    console.log(results)
                    return results
              }
              catch(err){
                  console.log(err)
                  return null
              }  
            }
        },
        get_cust_orders:{
            type:new GraphQLList(OrderType),
            args:{
                email:{type:GraphQLString},
                order_type:{type:GraphQLString}
            },
            resolve(parentValue, args){
                console.log("request received")
                let status_list=[]
                
                if(args.order_type=="new"){
                    status_list=["placed"]
                }
                else if(args.order_type=="all"){
                    status_list=["received","placed","preparing","on the way","ready","pickedup","cancelled","delivered"]
                }
                else if(args.order_type=="ongoing"){
                    status_list=["received","placed","preparing","on the way","ready"]
                }
                else{
                    status_list=["delivered","pickedup","cancelled"]
                }
                console.log("here is the order type----------------->",args.order_type)
                
                console.log("here is the status list----------------->",status_list)
                try{
                    let results = Orders.find({customer_email:args.email,order_status:{"$in":status_list}})
                    if(results){
                        return results
                    }
                    else{
                        return null
                    }
                }
                catch(err){
                    return null
                }
            }


                
           },
           get_customer_login:{
            type:CustomerType,
            args:{
                email:{type:GraphQLString},
                upassword:{type:GraphQLString}  
            },
            async resolve(parentValue, args){
                try{
                    console.log("received request to authenticate a user")
                   let result=  await Customer.findOne({email:args.email,upassword:args.upassword})
                   if(result){
                        return result
                   } 
                   else{
                       console.log("Oops nothing found")
                        return null
                   }
                }
                catch(err){
                    console.log(err)
                    return null
                }
            }
        },
        get_resto_oders:{
            type:new GraphQLList(OrderType),
            args:{
                resteraunt_name:{type:GraphQLString},
                zipcode:{type:GraphQLString},
                order_type:{type:GraphQLString}

            },
            resolve(parentValue, args){
                console.log("request received to get restaurant orders")
                let status_list=[]
                
                if(args.order_type=="new"){
                    status_list=["placed"]
                }
                else if(args.order_type=="all"){
                    status_list=["received","placed","preparing","on the way","ready","pickedup","cancelled","delivered"]
                }
                else if(args.order_type=="ongoing"){
                    status_list=["received","placed","preparing","on the way","ready"]
                }
                else{
                    status_list=["delivered","pickedup","cancelled"]
                
                }
                console.log(args)
                try{
                    let results = Orders.find({restaurant_name:args.resteraunt_name,restaurant_zipcode:args.zipcode,order_status:{"$in":status_list}})
                    if(results){
                        return results
                    }
                    else{
                        console.log("nothing found")
                        return null
                    }
                }
                catch(err){
                    console.log(err)
                    return null
                }
            }
            },
            resto_login:{
                type:OwnerType,
                args:{
                    email:{type:GraphQLString},
                    upassword:{type:GraphQLString}  
                },
                async resolve(parentValue, args){

                    console.log("received restaurant owner login request")
                    let result=  await Owner.findOne({email:args.email,upassword:args.upassword})
                   if(result){
                        return result
                   } 
                   else{
                       console.log("Oops nothing found")
                        return null
                   }
                }
            }

            



        
    }





    }
);

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        
        place_order:{
            type:OrderType,
            args:{
                customer_email:{type:GraphQLString},
                restaurant_name:{type:GraphQLString},
                restaurant_zipcode:{type:GraphQLString},
                amount:{type:GraphQLFloat},
                order_status:{type:GraphQLString},
                delivery_address:{type:GraphQLString},
                instructions:{type:GraphQLString}
            },
            async resolve(parentValue, args){
                console.log("received request to place an order")

                let order = new Orders(args)
                order.order_date=Date.now()
                let result= await order.save()
                if(result){
                    return result

                }
                else{
                    return null
                }
            }
        },
        update_order:{
            type:OrderType,
            args:{
                id:{type: GraphQLString},
                status:{type: GraphQLString}
            },
            async resolve(parentValue, args){
                console.log("received a request to update the order")
                try{
                let result = await Orders.updateOne({_id:args.id},{order_status:args.status})
                console.log(result)
                return result
            }
                catch(err){
                    console.log(err)
                    return null
                }
            }
        },
        insert_cust:{
            type:CustomerType,
            args:{
                email:{type:GraphQLString},
                fullname:{type:GraphQLString},
                
                zipcode:{type:GraphQLString},
                contact:{type:GraphQLString},
                address:{type:GraphQLString},
                upassword:{type:GraphQLString},
               userdp:{type:GraphQLString},
                city:{type:GraphQLString},
                country:{type:GraphQLString}
            },
            
            async resolve(parentValue, args){
                console.log("request received to add a customer")
                console.log(args)
                let user= new Customer(args)
               // console.log(user)
                let result = await user.save()
                //console.log(result)
                console.log("user added")
                return result
            }
        },

        insert_owner:{
            type:OwnerType,
            args:{
                email:{type:GraphQLString},
                fullname:{type:GraphQLString},
                
                zipcode:{type:GraphQLString},
                contact:{type:GraphQLString},
                address:{type:GraphQLString},
                upassword:{type:GraphQLString},
               userdp:{type:GraphQLString},
               
            },
            
            async resolve(parentValue, args){
                console.log("request received to add a resto owner")
                console.log(args)
                let user= new Owner(args)
               // console.log(user)
                let result = await user.save()
                //console.log(result)
                console.log("owner added")
                return result
            }
        },
        insert_resto:{
            type:RestaurantType,
            args:{
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
            },
            
            async resolve(parentValue, args){
                console.log("request received to add resteraunt_details")
                console.log(args)
                let user= new RestaurantsModel(args)
               // console.log(user)
                let result = await user.save()
                //console.log(result)
                console.log("Restaurant added")
                return result
            }
        },
        insert_dish:{
            type:DishesType,
            args:{
                id:{type:GraphQLString},
                dish_name:{type:GraphQLString},
                resteraunt_name:{type:GraphQLString},
                zipcode:{type:GraphQLString},
                dish_desc:{type:GraphQLString},
                dishdp:{type:GraphQLString},
                category:{type:GraphQLString},
                price:{type:GraphQLFloat}
                
            },
            
            async resolve(parentValue, args){
                console.log("request received to add a resto owner")
                console.log(args)
                
                let dish= new DishesModel({dish_name:args.dish_name,resteraunt_name:args.resteraunt_name,zipcode:args.zipcode,dish_desc:args.dish_desc,dishdp:args.dishdp,category:args.category,price:args.price})
                dish.id = dish._id
               // console.log(user)
                let result = await dish.save()
                //console.log(result)
                console.log("Restaurant added")
                return result
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});