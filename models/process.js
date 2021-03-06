var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  process_name:{type:String},
  process_description:{type:String},
  created_on:{type:Date,default:Date.now()},
  keywords:{type:String},
  steps:[String]
},{collection:'process'});
module.exports = mongoose.model('process',Schema);
