var mongoose = require('mongoose');
var user_model = require('../models/users');
var event_model = require('../models/events');
var process_model = require('../models/process');
var college_building_model = require('../models/college_buildings');
var college_information_model = require('../models/collegeInformation');
var admission_model = require('../models/admission');
var placement_model = require('../models/placement');

exports.delete_user = function(req,callback){
  user_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });

}

exports.delete_placement = function(req,callback){
  placement_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });

}
exports.deleteEvents = function(req,callback){
  event_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });
}

exports.deleteProcess = function(req,callback){
  process_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });
}

exports.deleteCollegeBuildings = function(req,callback){
  college_building_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });
}

exports.deleteCollegeInformation = function(req,callback){
  college_information_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });
}

exports.deleteAdmission = function(req,callback){
  admission_model.remove({ _id: req.body.id }, function(err) {
      if (!err) {
              callback({'response':true});
      }
      else {
              callback({'response':false});
      }
  });
}
