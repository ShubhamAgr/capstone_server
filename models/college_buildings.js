var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  block_location:[String],// In format of longitude_latitude by gps location ex. 18.8_20.8
  block_id:{type:String},
  block_information:{type:String},
  keywords:{type:String},
  created_on:{type:Date,default:Date.now()}
},{collection:'college_buildings'});
module.exports = mongoose.model('college_buildings',Schema);
