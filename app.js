/*
  *Say Hi to Lovely Professional University---
  *Server-2 To manage the content of database and activities related to database...
*/
var express = require('express');
var assert = require('assert');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var server = require('http').Server(app);
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var __search = require('./routes/searching')
var db;
const url = "mongodb://localhost:27017/capstone-database";
require('./config/database&collections')(MongoClient,url);
mongoose.connect(url);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
__search(MongoClient,url,app);
require('./routes.js')(app);

server.listen(3000);
console.log("server is listening at port 3000");
