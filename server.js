//add other npm modules used here----------------------
let express = require("express");
let session = require("express-session");
let passport = require("passport");
//import database models here--------------------------
let db = require("./models");
//import routes here-----------------------------------
// require("./controllers/[ROUTE_NAME]");
require("./controllers/user-routes");

//renames express function to app
let app = express();

//set our port
let PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//code for "views" (activate once html pages are done and stored in "views" folder)------------------------------
// app.use(express.static("views"));
//code for passport.js (user profile and login)--------------------------------
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//code for using routes-------------------------------
// app.use(routes);

//sync database using sequelize and start our server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});

//------------Before running server.js:
// 1) enter your own username and password for MySQL in config.json
// 2) make sure to run schema in MySQL first to create charities_db database
// 3) run npm install------------