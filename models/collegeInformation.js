var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  information_title:{type:String},
  information_description:{type:String},
  information_file:{type:String},
  created_on:{type:Date,default:Date.now()}
},{collection:'college_information'});
module.exports = mongoose.model('college_information',Schema);
