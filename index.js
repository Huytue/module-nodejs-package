const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routeStudent = require('./routes/student');
const routeClasses = require('./routes/classes');
const routeAdmin = require('./routes/admin');
const routeHome = require('./routes/home');

module.exports.app = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set("view engine", "ejs");
  app.use(express.static("node_modules/module-nodejs-package/public"));
  app.set("views", "node_modules/module-nodejs-package/views");
  app.use("/student", routeStudent);
  app.use("/classes", routeClasses);
  app.use("/admin", routeAdmin);
  app.use("/", routeHome);
  app.listen(3000);
}

//ket noi mongodb
module.exports.mongoLocal = (nameDB) => {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost/" + nameDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connection successfully");
  });
}

module.exports.mongoOnline = (urlDB) => {
  const mongoose = require("mongoose");
  mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connection successfully");
  });
}

