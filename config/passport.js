let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;
let db = require("../models");

passport.use(new LocalStrategy(
  //users sign in with username
  {
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done) {
    //finds user through their username in database
    db.User.findOne({
      where: {
        username: username,
      }
    }).then(function(dbUser) {
      //username validation
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      //password validation
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      //successful login
      return done(null, dbUser);
    });
  }
));

//from boilerplate code
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//exporting our configured passport
module.exports = passport;
