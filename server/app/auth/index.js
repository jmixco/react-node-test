const User = require('../db').userModel;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');

// Setup work and export for the JWT passport strategy
module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        //creates a session with the local user id
        done(null, user.id);
    });

    //run when authorization ends
    passport.deserializeUser((id, done) => {
        //find the user USING THE _id
        User.findById(id)
            .then(user => done(null, user))//req.user
            .catch(error => console.log('error', 'error deserializing user' + error));
    });

    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = config.sessionSecret;
    function tokenAuthProcessor (jwt_payload, done) {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
            .catch(error => {
                return done(error, false);
            });
    }
    passport.use(new JwtStrategy(opts, tokenAuthProcessor));
};