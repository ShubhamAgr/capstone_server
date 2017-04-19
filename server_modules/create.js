var mongoose = require('mongoose');
var user_model = require('../models/users');
var event_model = require('../models/events');
var process_model = require('../models/process');
var admission_model = require('../models/admission');
var placement_model = require('../models/placement');
var college_building_model = require('../models/college_buildings');
var college_information_model = require('../models/collegeInformation');

exports.createUser = function(req,callback){
  var id = new mongoose.Types.ObjectId;
  var newUser= new user_model({
    _id:mongoose.Types.ObjectId(id),
    reg_no:req.body.reg_no,
    created_on:Date.now(),
    password:req.body.password
  },{collection:'users'});
  newUser.save(function(err,newUser){
    if(err){
      callback({"message":"unsuccessful"});
    }else{
      callback({"message":"successful"});

    }
});
}

exports.createPlacement = function(req,callback){
 var id = new mongoose.Types.ObjectId;
 var newPlacements = new placement_model({
   _id:mongoose.Types.ObjectId(id),
   policy:req.body.policy,
   procedure:req.body.procedure,
   companiesPlacement:req.body.companiesPlacement,
   visitedPastComp:req.body.visitedPastComp,
   packagesOffered1:req.body.packagesOffered1,
   department_branch:req.body.department_branch,
   date:req.body.date,
   date_period:Date.now(),
   upcoming1:req.body.upcoming1,
   numbers:req.body.numbers,
   packagesOffered:req.body.packagesOffered,
   upcoming:req.body.upcoming,
   keywords:req.body.keywords,
   priorityParameter:req.body.priorityParameter
 },{collection:'placements'});
newPlacements.save(function(err,newPlacements){
  if(err){
    callback({"message":"unsuccessful"});
  }else{
    callback({"message":"successful"});
  }
});
}

exports.createEvents = function(req,callback){
  var id = new mongoose.Types.ObjectId;
  var newEvent= new event_model({
    _id:mongoose.Types.ObjectId(id),

    department_branch:req.body.department_branch,
    discipline:req.body.discipline,
    EventsName:req.body.event_name,
    Fees:req.body.fees,
    PrizeMoney:req.body.prizemoney,
    procedure:req.body.procedure,
    date_time:Date.now(),
    TypeOfEvents:req.body.event_type,
    created_on:Date.now(),
    keywords:req.body.keywords,
    priorityParameter:req.body.priorityParameter,
    event_name:req.body.event_name,
    event_type:req.body.event_type,
    event_venue:req.body.event_venue,
    event_date:Date.now(),
    event_information:req.body.event_information,
  },{collection:'events'});
  newEvent.save(function(err,newEvent){
    if(err){
      callback({"message":"unsuccessful"});
    }else{
      callback({"message":"successful"});

    }
});
}

exports.createAdmissions = function(req,callback){
  var id = new mongoose.Types.ObjectId;
  var newAdmissions= new admission_model({
    _id:mongoose.Types.ObjectId(id),
    procedure:req.body.procedure,
    Elgibility:req.body.eligibility,
    fees:req.body.fees,
    lpuNest:req.body.lpuNest,
    policy:req.body.policy,
    scholarship:req.body.scholarship,
    subjects:req.body.subjects,
    benefits:req.body.benefits,
    created_on:Date.now(),
    currentQualification:req.body.currentQualification,
    department_branch:req.body.department_branch,
    discipline:req.body.discipline,
    keywords:req.body.keywords,
    priorityParameter:req.body.priorityParameter
  },{collection:'admissions'});
  newAdmissions.save(function(err,newAdmissions){
    if(err){
      callback({"message":"unsuccessful"});
    }else{
      callback({"message":"successful"});

    }
});
}
exports.createProcess = function(req,callback){
  var id = new mongoose.Types.ObjectId;
  var msteps = req.body.steps.split(",")
  var newProcess= new process_model({
    _id:mongoose.Types.ObjectId(id),
    process_name:req.body.process_name,
    created_on:Date.now(),
    keywords:req.body.keywords,
    process_description:req.body.process_description,
    steps:msteps
  },{collection:'process'});

  newProcess.save(function(err,newProcess){
    if(err){
      callback({"message":"unsuccessful"});
    }else{
      callback({"message":"successful"});

    }
});
}

exports.createCollegeBuildings = function(req,callback){
  var id = new mongoose.Types.ObjectId;
  var mlocations = req.body.locations.split(",")
  var newBuilding= new college_building_model({
    _id:mongoose.Types.ObjectId(id),
    block_location:mlocations,
    block_id:req.body.block_id,
    created_on:Date.now(),
    keywords:req.body.keywords,
    block_information:req.body.block_information,
  },{collection:'college_buildings'});

  newBuilding.save(function(err,newBuilding){
    if(err){
      callback({"message":"unsuccessful"});
    }else{
      callback({"message":"successful"});

    }
});
}

exports.createCollegeInformation = function(req,callback){
  var id = new mongoose.Types.ObjectId;
  var newInformation= new college_information_model({
    _id:mongoose.Types.ObjectId(id),
    information_title:req.body.title,
    created_on:Date.now(),
    keywords:req.body.keywords,
    information_description:req.body.description
  },{collection:'college_information'});

  newInformation.save(function(err,newInformation){
    if(err){
      callback({"message":"unsuccessful"});
    }else{
      callback({"message":"successful"});
    }
});
}
