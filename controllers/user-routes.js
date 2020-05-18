//requiring our user.js model and passport configurations
let db = require("../models");
let passport = require("../config/passport");

module.exports = function(app) {
  //login route
  app.post("/user/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  //signup route
  app.post("/user/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/user/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
        alert("Username must be at least 6 characters.")
      });
  });

  //logout route
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  //user_data route (to pull user data from database for use in frontend)
  app.get("/user/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        username: req.user.username,
        id: req.user.id
      });
    }
  });
};
