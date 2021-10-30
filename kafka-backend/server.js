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

var Books = require('./services/books.js');

async function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    await consumer.on('message', async function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        console.log(data.data)
        await fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
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
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request

handleTopicRequest("customer_login",CustomerLogin)
handleTopicRequest("customer_registration",CustomerRegistration)
handleTopicRequest("owner_registration",OwnerRegistration)
handleTopicRequest("resto_registration",RestoRegistration)