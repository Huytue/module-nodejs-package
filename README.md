# module-nodejs-package-

Demo Nodejs Module Package

Using npm:

npm i module-nodejs-package
npm i -g module-nodejs-package

In index.js:
//Load the full build
const modules = require('module-nodejs-package')

//Call functions app()
modules.app();

//Call functions mongodb() create database
modules.mongodb("ManageStudent");

//Run app in command line
node index.js
