"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var { secret } = require("./config");
var jwt = require('jwt-simple');
const Owner = require('../mongo_operations/models/RestaurantOwnerModel');
const Customer = require('../mongo_operations/models/CustomerModel');

// Setup work and export for the JWT passport strategy
function auth() {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
    };
    console.log("loaded auth")
    passport.use(
        
        new JwtStrategy(opts, (jwt_payload, callback) => {
            
            const user_type = jwt_payload.user_type;
            const user_id = jwt_payload._id;
            console.log("here...................")


            console.log("user_id------------------>",jwt_payload)
            if (user_type=="customer"){
                
            Customer.findById(user_id, (err, results) => {
                if (err) {
                    return callback(err, false);
                }
                if (results) {
                    callback(null, results);
                }
                else {
                    callback(null, false);
                }
            });
        }
        else{
            Owner.findById(user_id, (err, results) => {
                if (err) {
                    return callback(err, false);
                }
                if (results) {
                    console.log("found the resteraunt_owner",results)
                    callback(null, results);
                }
                else {
                    console.log("not found the resteraunt_owner",results)
                    callback(null, false);
                }
            });
            }
        })
    )
}

exports.auth = auth;
exports.checkAuth = passport.authenticate("jwt", { session: false });


