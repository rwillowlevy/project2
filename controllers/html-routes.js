let path = require("path");

let authenticateLogin = require("../config/middleware/authenticateLogin");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../views/html/login.html"));
  });

  app.get("/signup", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../views/html/signup.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/home.html"));
  });

  app.get("/members", authenticateLogin, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/user.html"));
  });

  app.get("/contact_us", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/contact.html"));
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};
