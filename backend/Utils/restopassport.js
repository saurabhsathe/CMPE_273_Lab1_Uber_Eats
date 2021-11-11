"use strict";
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var { secret } = require("./config");
var jwt = require('jwt-simple');
const Owner = require('../mongo_operations/models/RestaurantOwnerModel');

// Setup work and export for the JWT passport strategy
function auth2() {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: secret
    };
    passport.use(
        
        new JwtStrategy(opts, (jwt_payload, callback) => {
            
            const owner_id = jwt_payload._id;
            console.log("reached here------------------------->",jwt_payload)
    
            Owner.findById(owner_id, (err, results) => {
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

exports.auth2 = auth2;
exports.checkAuth2 = passport.authenticate("jwt", { session: false });


