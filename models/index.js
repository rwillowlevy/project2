//prevents use of undeclared variables
'use strict';

//modules
let fs = require("fs");
let path = require("path");
let Sequelize = require("sequelize");
let basename = path.basename(module.filename);
let env = process.env.NODE_ENV || "development";
let config = require("../config/config.json")[env];
let db = {};

//establishes connection between sequelize and database using info from config.json
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//code for selecting all models files from "models" folder
fs
  //read current directory
  .readdirSync(__dirname)
  //looks for all model js files, slices ".js" from the end, and ignores "index.js"
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  //populates db object with models' names
  .forEach(function(file) {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });
//associates models with their respective tables in db
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
