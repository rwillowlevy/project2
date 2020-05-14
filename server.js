//add other npm modules used here----------------------
let express = require("express");
// let handlebars = require("express-handlebars"); 
// let session = require("express-session");
// let passport = require("passport");
//import database models here--------------------------
// let db = require("./models");
//import routes here-----------------------------------
// let routes = require("./routes/[ROUTE_NAME]");
let app = express();

//set our port
let PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//code for "views" stuff w/ handlebars------------------------------
// app.use(express.static("views"));
// app.engine("handlebars", handlebars({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
//code for passport.js (user profile and login)--------------------------------
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
//code for using routes-------------------------------
// app.use(routes);

//start our server
 app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});