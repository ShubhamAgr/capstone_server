var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  policy:{type:String},
  procedure:{type:String},
  companiesPlacement:{type:String},
  visitedPastComp:{type:String},
  packagesOffered1:{type:String},
  department_branch:{type:String},
  date:{type:Date,default:Date.now()} ,
  date_period:{type:Date,default:Date.now()},
  upcoming1:{type:String},
  numbers:{type:String},
  packagesOffered:{type:String},
  upcoming:{type:String}
},{collection:'placements'});
module.exports = mongoose.model('placements',Schema);
