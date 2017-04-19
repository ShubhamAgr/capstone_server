var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  department_branch:{type:String},
  discipline:{type:String},
  EventsName:{type:String},
  Fees:{type:String},
  PrizeMoney:{type:String},
  procedure:{type:String},
  date_time:{type:Date,default:Date.now()},
  TypeOfEvents:{type:String},

  event_name:{type:String},
  event_type:{type:String},
  event_venue:{type:String},

  event_date:{type:Date,default:Date.now()},
  event_information:{type:String},
  created_on:{type:Date,default:Date.now()},
  priorityParameter:{type:String},
  keywords:{type:String},
  event_files:[{
    _id:id,
    file_name:{type:String}
  }]
},{collection:'events'});
// Schema.index({'$**': 'text'});
module.exports = mongoose.model('events',Schema);
/*
*e

*/
