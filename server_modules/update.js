var mongoose = require('mongoose');
var user_model = require('../models/users');
var event_model = require('../models/events');
var process_model = require('../models/process');
var college_building_model = require('../models/college_buildings');
var college_information_model = require('../models/collegeInformation');
var admission_model = require('../models/admission');
var placement_model = require('../models/placement');

exports.update_user = function(req,callback){
  //pehle user model fetch karo then update and save it...

  user_model.find({"_id":id},function(){
    if(err){
    }else{
      var updatedModel = {

      };
      userModel.findOneAndUpdate({"_id":id},{"lastName":req.body.lastName},{safe:true,upsert:true},function(err){
            if(err){
              callback({"response":false});
            }else{
              callback({"response":true});
            }
          });
    }

  });

}

exports.updateEvents = function(req,callback){

  event_model.find({'_id':req.body.id},function(err,events){
      if(err){
        console.log(err);
      }else{
        var eventsObj = events[0].toObject();
        var myObj = {
          department_branch:(req.body.department_branch == undefined)?eventsObj.department_branch:req.body.department_branch,
          discipline:(req.body.discipline == undefined)?eventsObj.discipline:req.body.discipline,
          EventsName:(req.body.event_name == undefined)?eventsObj.event_name:req.body.event_name,
          Fees:(req.body.fees == undefined)? eventsObj.Fees:req.body.fees,
          PrizeMoney:(req.body.prizemoney == undefined)?eventsObj.PrizeMoney:req.body.prizemoney,
          procedure:(req.body.procedure == undefined)?eventsObj.procedure:req.body.procedure,
          date_time:(req.body.date_time == undefined)?eventsObj.date_time:req.body.date_time,
          TypeOfEvents:(req.body.typeOfEvents == undefined)?eventsObj.TypeOfEvents:req.body.typeOfEvents,

          event_name:(req.body.event_name == undefined)?eventsObj.event_name:req.body.event_name,
          event_type:(req.body.event_type == undefined)?eventsObj.event_type:req.body.event_type,
          event_venue:(req.body.event_venue == undefined)?eventsObj.event_venue:req.body.event_venue,

          event_date:(req.body.event_date == undefined)?eventsObj.event_date:req.body.event_date,
          event_information:(req.body.event_information == undefined)?eventsObj.event_information:req.body.event_information,
        };
        event_model.findOneAndUpdate({"_id":req.body.id},myObj,{safe:true,upsert:true},function(err){
              if(err){
                callback({"response":false});
              }else{
                callback({"response":true});
              }
            });

      }
  });
}

exports.updateProcess = function(username,callback){
   process_model.find({"_id":req.body.id},function(err,process){

   });
}

exports.updateCollegeBuildings = function(username,callback){
  college_building_model.find({"_id":req.body.id},function(err,buildings){
    var buildObj = buildings[0].toObject();
    var myObj = {
      // block_location:[String],// In format of longitude_latitude by gps location ex. 18.8_20.8
      block_id:(req.body.block_id == undefined)?buildObj.block_id:req.body.block_id,
      block_information:(req.body.block_information == undefined)?buildObj.block_information:req.body.block_information,
    }

    college_building_model.findOneAndUpdate({"_id":req.body.id},myObj,{safe:true,upsert:true},function(err){
          if(err){
            callback({"response":false});
          }else{
            callback({"response":true});
          }
        });
  });
}

exports.updateCollegeInformation = function(req,callback){
college_information_model.find({"_id":req.body.id},function(err,information){
  var infObj = information[0].toObject();
  // var myObj = {
  //   information_title:()?:,
  //   information_description:()?:,
  //   information_file:()?:
  // }
});
}

exports.updatePlacement = function(req,callback){
placement_model.find({"_id":req.body.id},function(err,placement){
  var placeObj = placement[0].toObject();
  var myObj = {
    policy:(req.body.policy == undefined)?placeObj.policy:req.body.policy,
    procedure:(req.body.procedure == undefined)?placeObj.procedure:req.body.procedure,
    companiesPlacement:(req.body.companiesPlacement == undefined)?placeObj.companiesPlacement:req.body.companiesPlacement,
    visitedPastComp:(req.body.visitedPastComp == undefined)?placeObj.visitedPastComp:req.body.visitedPastComp,
    packagesOffered1:(req.body.packagesOffered1 == undefined)?placeObj.packagesOffered1:req.body.packagesOffered1,
    department_branch:(req.body.department_branch == undefined)?placeObj.department_branch:req.body.department_branch,
    upcoming1:(req.body.upcoming1 == undefined)?placeObj.upcoming1:req.body.upcoming1,
    numbers:(req.body.numbers == undefined)?placeObj.numbers:req.body.numbers,
    packagesOffered:(req.body.packagesOffered == undefined)?placeObj.packagesOffered:req.body.packagesOffered,
    upcoming:(req.body.upcoming == undefined)?placeObj.upcoming:req.body.upcoming
  };
  placement_model.findOneAndUpdate({"_id":req.body.id},myObj,{safe:true,upsert:true},function(err){
        if(err){
          callback({"response":false});
        }else{
          callback({"response":true});
        }
      });

});
}

exports.updateAdmissions = function(req,callback){
admission_model.find({"_id":req.body.id},function(err,admission){
 var adObj = admission[0].toObject();
 var myObj = {
   procedure:(req.body.procedure == undefined)?adObj.procedure:req.body.procedure,
   Elgibility:(req.body.eligibility == undefined)?adObj.Eligibility:req.body.eligibility,
   fees:(req.body.fees == undefined)?adObj.fees:req.body.fees,
   lpuNest:(req.body.lpuNest == undefined)?adObj.lpuNest:req.body.lpuNest,
   policy:(req.body.policy == undefined)?adObj.policy:req.body.policy,
   scholarship:(req.body.scholarship == undefined)?adObj.scholarship:req.body.scholarship,
   subjects:(req.body.subjects == undefined)?adObj.subjects:req.body.subjects,
   benefits:(req.body.benefits == undefined)?adObj.benefits:req.body.benefits,
   currentQualification:(req.body.currentQualification == undefined)?adObj.currentQualification:req.body.currentQualification,
   department_branch:(req.body.department_branch ==  undefined)?adObj.department_branch:req.body.department_branch,
   discipline:(req.body.discipline == undefined)?adObj.discipline:req.body.discipline
 }
admission_model.findOneAndUpdate({"_id":req.body.id},myObj,{safe:true,upsert:true},function(err){
      if(err){
        callback({"response":false});
      }else{
        callback({"response":true});
      }
    });
});
}
