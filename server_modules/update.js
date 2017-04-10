var mongoose = require('mongoose');
var user_model = require('../models/users');
var event_model = require('../models/events');
var process_model = require('../models/process');
var college_building_model = require('../models/college_buildings');
var college_information_model = require('../models/collegeInformation');

exports.update_user = function(username,callback){
  userModel.findOneAndUpdate({"_id":id},{"lastName":req.body.lastName},{safe:true,upsert:true},function(err){
        if(err){
          throw(err);
        }
      });
callback({'response':true});
}

exports.updateEvents = function(username,callback){
callback({'response':true});
}

exports.updateProcess = function(username,callback){
callback({'response':true});
}

exports.updateCollegeBuildings = function(username,callback){
callback({'response':true});
}

exports.updateCollegeInformation = function(username,callback){
callback({'response':true});
}
