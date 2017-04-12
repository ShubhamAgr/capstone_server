var mongoose = require('mongoose');
var user_model = require('../models/users');
var event_model = require('../models/events');
var process_model = require('../models/process');
var admission_model = require('../models/admission');
var college_building_model = require('../models/college_buildings');
var college_information_model = require('../models/collegeInformation');


exports.getUser = function(topicId,range,callback){
  //range will be in format of 10_12
  // var responseArray = new Array();
  var ranges = range.split("_");
  var initial = Number.parseInt(ranges[0]);
  var final = Number.parseInt(ranges[1]);
  var query = user_model.find().sort('-created_on').skip(initial).limit(final);
  query.exec(function(err,values){
  callback(values);
  });
}

exports.getEvent = function(topicId,range,callback){
  //range will be in format of 10_12
  // var responseArray = new Array();
  var ranges = range.split("_");
  var initial = Number.parseInt(ranges[0]);
  var final = Number.parseInt(ranges[1]);
  var query = event_model.find().sort('-created_on').skip(initial).limit(final);
  query.exec(function(err,values){
  callback(values);
  });
}

exports.getProcess = function(topicId,range,callback){
  //range will be in format of 10_12
  // var responseArray = new Array();
  var ranges = range.split("_");
  var initial = Number.parseInt(ranges[0]);
  var final = Number.parseInt(ranges[1]);
  var query = process_model.find().sort('-created_on').skip(initial).limit(final);
  query.exec(function(err,values){
  callback(values);
  });
}

exports.getAdmission = function(topicId,range,callback){
  //range will be in format of 10_12
  // var responseArray = new Array();
  var ranges = range.split("_");
  var initial = Number.parseInt(ranges[0]);
  var final = Number.parseInt(ranges[1]);
  var query = admission_model.find().sort('-created_on').skip(initial).limit(final);
  query.exec(function(err,values){
  callback(values);
  });
}

exports.getCollegeBuilding = function(topicId,range,callback){
  //range will be in format of 10_12
  // var responseArray = new Array();
  var ranges = range.split("_");
  var initial = Number.parseInt(ranges[0]);
  var final = Number.parseInt(ranges[1]);
  var query = college_building_model.find().sort('-created_on').skip(initial).limit(final);
  query.exec(function(err,values){
  callback(values);
  });
}

exports.getCollegeInformation = function(topicId,range,callback){
  //range will be in format of 10_12
  // var responseArray = new Array();
  var ranges = range.split("_");
  var initial = Number.parseInt(ranges[0]);
  var final = Number.parseInt(ranges[1]);
  var query = college_information_model.find().sort('-created_on').skip(initial).limit(final);
  query.exec(function(err,values){
  callback(values);
  });
}
