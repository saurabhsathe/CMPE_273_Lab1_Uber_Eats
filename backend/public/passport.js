"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var { secret } = require("./config");
const Users = require('../mongo_operations/models/CustomerModel');
const kafka = require('../kafka/client')

/*
await kafka.make_request('customer_login',user, function(err,results){

        console.log('in result');
        console.log(results);
        if (err){
            console.log(err)
            console.log("Inside err");
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("error reaching database")
        }else{
            if (results.length==0){
                res.writeHead(202,{
                    'Content-Type' : 'text/plain'
                })
                res.end("account does not exist")
            }
            else{
                res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
                res.writeHead(200,{
                    'Content-Type' : 'text/plain'
                })
                res.end("account exists")
            }
            
            }
        
    });

*/



// Setup work and export for the JWT passport strategy
function custauth() {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
    };
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, callback) =>{
            await kafka.make_request('customer_login',user, function(err,results){

        console.log('in result');
        console.log(results);
        if (err){
            return callback(err,false)
        }else{
            if (results.length==0){
                return callback(null,false)
            }
            else{
                return callback(null,results)
            }
            
            }
        
    });




        } )
    )
}
// Setup work and export for the JWT passport strategy
function resto_auth() {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
    };
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, callback) =>{
            console.log("resto login request received")
    let user=req.body
    
    RestoOwner.findOne({email:user.email,pwd:user.password},async (err,dummy)=>{
        if (err){
            res.writeHead(500,{
                'Content-Type' : 'text/plain'
            })
            res.end("error")
        }
      
        if(dummy){
            res.cookie('cookie',"admin",{maxAge: 1000000, httpOnly: false, path : '/'});
           
            Restaurant.findOne({owner_email:user.email},async (err,resto_details)=>{
                if (err){
                    res.writeHead(500,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end("encountered an error")
        

                }
                    res.writeHead(200,{
                        'Content-Type' : 'text/plain'
                    })
                    res.end(JSON.stringify(resto_details))
        
                
            })



        }
        else{
            res.writeHead(202,{
                'Content-Type' : 'text/plain'
            })
            res.end("account does not exist")
        }
    })



        } )
    )
}

exports.custauth = custauth;
exports.resto_auth = resto_auth;
exports.checkAuth = passport.authenticate("jwt", { session: false });


