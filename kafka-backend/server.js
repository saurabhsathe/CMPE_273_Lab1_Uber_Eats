var connection =  new require('./kafka/Connection');
//topics files
//var signin = require('./services/signin.js');
const mongo=require("mongoose")
let Dummy=require("./mongo_operations/models/DummyModel")

var Restaurant=require("./mongo_operations/models/RestaurantsModel")
var RestoOwner = require("./mongo_operations/models/RestaurantOwnerModel")
var Dishes = require("./mongo_operations/models/DishesModel")
var Favourites = require("./mongo_operations/models/FavouritesModel");
var Orders = require("./mongo_operations/models/OrdersModel");



var {mongo_connection_string} = require('./mongo_operations/mongo_connection')

var mongodb=mongo.connect(mongo_connection_string,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    maxpoolSize:500,
    
},(err,client)=>{
    if (err){
        console.log("error connecting to the database")
        console.log(err)
    }
    else{
        console.log("mongo db connection successful")
    }
})


var CustomerLogin = require('./services/customer_login.js')
var CustomerRegistration = require('./services/customer_registration')
var OwnerRegistration = require('./services/owner_registration')
var RestoRegistration =  require('./services/resto_registration')
var RestoLogin =  require('./services/resto_login')
var AddDish =  require('./services/add_dish')
var getDishes = require('./services/get_dishes')
var getRestos = require('./services/getall_resto')
var updateDish = require('./services/update_dish')
var addFavourite = require ('./services/addToFavourites')
var getFavourites = require ('./services/getFavourites')
var getAddress = require('./services/getAddress')
var placeOrder= require('./services/placeOrder')
var updateOrder= require('./services/updateOrder')
var get_cust_orders= require('./services/getCustOrders')
var get_resto_orders= require('./services/getRestoOrders')
var updateProfile =  require('./services/updateProfile')



async function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    await consumer.on('message', async function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        //console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        //console.log(data.data)
        await fname.handle_request(data.data, function(err,res){
           // console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            ;
        });
        
    });
}


handleTopicRequest("customer_login",CustomerLogin)
handleTopicRequest("customer_registration",CustomerRegistration)
handleTopicRequest("resto_registration",RestoRegistration)
handleTopicRequest("owner_registration",OwnerRegistration)
handleTopicRequest("add_dish",AddDish)
handleTopicRequest("get_dishes",getDishes)
handleTopicRequest("get_restos",getRestos)
handleTopicRequest("update_dish",updateDish)
handleTopicRequest("add_favourite",addFavourite)
handleTopicRequest("get_favourites",getFavourites)
handleTopicRequest("place_order",placeOrder)
handleTopicRequest("update_order",updateOrder)
handleTopicRequest("get_cust_orders",get_cust_orders)
handleTopicRequest("get_resto_orders",get_resto_orders)
handleTopicRequest("get_address",getAddress)
handleTopicRequest("update_profile",updateProfile)

