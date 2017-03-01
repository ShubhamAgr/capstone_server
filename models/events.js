var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  event_type:{type:String},
  event_venue:{type:String},
  event_date:{type:Date,default:Date.now()},
  event_information:{type:String},
  event_files:[{
    _id:id,
    file_name:{type:String}
  }]
},{collection:'events'});
module.exports = mongoose.model('events',Schema);
