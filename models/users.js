var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
  reg_no:{type:String},
  password:{type:String},
  created_on:{type:Date,default:Date.now()},
  recent_activities:[{
    event_id:id,
    date:{type:Date,default:Date.now()},
  }],
},{collection:'users'});
module.exports = mongoose.model('user',Schema);
