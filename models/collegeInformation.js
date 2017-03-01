var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
},{collection:'college_information'});
module.exports = mongoose.model('college_information',Schema);
