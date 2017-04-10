var mongoose = require('mongoose');
var user_model = require('../models/users');
var event_model = require('../models/events');
var process_model = require('../models/process');
var college_building_model = require('../models/college_buildings');
var college_information_model = require('../models/collegeInformation');

exports.search_user = function(username,callback){
callback({'response':true});
}

exports.searchEvents = function(username,callback){
callback({'response':true});
}

exports.searchProcess = function(username,callback){
callback({'response':true});
}

exports.searchCollegeBuildings = function(username,callback){
callback({'response':true});
}

exports.searchCollegeInformation = function(username,callback){
callback({'response':true});
}
