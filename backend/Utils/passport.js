"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var { secret } = require("./config");
var jwt = require('jwt-simple');
const Customer = require('../mongo_operations/models/CustomerModel');

// Setup work and export for the JWT passport strategy
function auth() {
    
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("token"),
        secretOrKey: secret
    };
    console.log("reached here")
    passport.use(
        new JwtStrategy(opts, (jwt_payload, callback) => {
            const user_id = jwt_payload._id;
            console.log(jwt_payload)
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
        })
    )
}

exports.auth = auth;
exports.checkAuth = passport.authenticate(passport.JwtStrategy, { session: false });


