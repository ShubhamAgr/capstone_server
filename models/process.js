var mongoose = require('mongoose');
var schema = mongoose.Schema;
var id = mongoose.Schema.Types.ObjectId;
var Schema = new schema({
  _id:id,
},{collection:'process'});
module.exports = mongoose.model('process',Schema);
